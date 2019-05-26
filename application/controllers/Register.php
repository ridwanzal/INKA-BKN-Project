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
	}
	
	public function index(){
		$this->load->view('register');
  }
  
  public function submit(){
		$username = $this->input->post('username');
		$name = $this->input->post('name');
    $password = md5($this->input->post('password'));
		$password2 = md5($this->input->post('password2'));
		if($password != $password2){
			echo '<script>alert("password tidak sama");</script>';
		}

		$data = array(
			'username' => $username,
			'fullname' => $name,
			'password' =>	$password,
		);

		$this->db->insert('user', $data);
		$check = $this->db->affected_rows() > 0;
		if($check){
			redirect(base_url('index.php/login'));
		}
  }
	
}
