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

			$get_all_user = $this->muser->get_all_user("user");
			$data['username'] = $this->session->userdata('name');
			$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
			$decode_fullname = json_decode($get_fullname);
			$get_fullname_result = $decode_fullname[0]->fullname;
			$get_foto = $this->muser->get_fotoname("user", "username", $data['username']); 
			$decode_foto = json_decode($get_foto);
			$get_foto_result = $decode_foto[0]->foto;

			$data_profile = array(
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'all_user' => $get_all_user,
				'fullname' => $get_fullname_result
			);

			$this->session->set_flashdata('key', 1);
			$this->session->set_userdata($data_session);	
			// $datas['username'] = $username;	
			// $datas['alluser'] = $cek2;
			// $this->load->view('admin', $data_profile);
			redirect(base_url("admin"));
		}else{
			if($username == ''){
				$this->session->set_flashdata('error', 'Maaf, Login Gagal');
				redirect(base_url("login"));
			}
			$this->session->set_flashdata('error', 'Maaf, Login Gagal');
			redirect(base_url("login"));
		}
	}
  
	public function logout(){
		$this->session->sess_destroy();
		redirect(base_url('login'));
	}
}
