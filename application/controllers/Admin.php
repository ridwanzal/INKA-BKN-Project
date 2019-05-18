<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

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
    if($this->session->userdata('status') != "login"){
			redirect(base_url("index.php/login"));
    }
		$this->load->model('mlogin');
		$this->load->model('muser');
	}

	public function index(){
		if($this->session->userdata('status') == "login"){
				$data['username'] = $this->session->userdata('name');
				$this->load->view('admin', $data);
		}
	}

	public function logout(){
		$this->session->sess_destroy();
		redirect(base_url("index.php/login"));
	}

	public function userlist(){
    if($this->session->userdata('status') == "login"){
			$get_all_user = $this->muser->get_all_user("user");
			$data['username'] = $this->session->userdata('name');
			$data['alluser'] = $get_all_user;
				$this->load->view('userlist', $data);
		}
	}
}
