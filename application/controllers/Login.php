<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

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
		$this->load->model('mlogin');
		$this->load->model('muser');
	}

	public function index(){
		$this->load->view('login');
	}
	
	/* call subtmi action on click*/
	public function submit(){
		//  echo '<script>alert("haha");</script>';
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$where = array(
			'username' => $username,
			'password' => md5($password)
		);
		$cek = $this->mlogin->cek_login("user", $where)->num_rows();
		$cek2 = $this->muser->get_all_user("user");
		if($cek > 0){
			$data_session = array(
				'name' => $username,
				'status' => 'login'
			);

			$this->session->set_userdata($data_session);
			$datas['username'] = $username;
			$datas['alluser'] = $cek2;
			// redirect(base_url("index.php/admin"));
			$this->load->view('admin', $datas);
		}else{
			if($username == ''){
				$this->session->set_flashdata('error', 'Maaf, Login Gagal');
				redirect(base_url("index.php/login"));
			}
			$this->session->set_flashdata('error', 'Maaf, Login Gagal');
			redirect(base_url("index.php/login"));
		}
	}
  
	public function logout(){
		$this->session->sess_destroy();
		redirect(base_url('index.php/login'));
	}
}
