<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct(){
		parent::__construct();		
		// $this->load->model('mlogin');
		$this->load->model('muser');
	}
	
	public function index(){
		$this->load->view('register');
  }
  
  public function submit(){
		$username = $this->input->post('username');
		$get_username = $this->muser->get_username('user', 'username', $username);
		$decode_get_username = json_decode($get_username);
		$count = count($decode_get_username);
		if($count > 0){
			$this->session->set_flashdata('error', 'Maaf, Username Terdaftar');
			redirect(base_url("index.php/register"));
		}else{
					$name = $this->input->post('name');
					$password = md5($this->input->post('password'));
					$password2 = md5($this->input->post('password2'));
					if($password != $password2){
						$this->session->set_flashdata('error', 'Maaf, Password tidak sama');
						redirect(base_url("index.php/register"));
					}
			
					$data = array(
						'username' => $username,
						'fullname' => $name,
						'password' =>	$password,
					);
			
					$this->db->insert('user', $data);
					$check = $this->db->affected_rows() > 0;
					if($check){
						$this->session->set_flashdata('message', '<div class="alert alert-success alert-dismissible">Registrasi berhasil
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						</div>');
						redirect(base_url('index.php/login'));
					}
		}

  }
	
}
