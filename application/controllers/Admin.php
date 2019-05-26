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
		$this->load->helper('form');
	}

	public function index(){
		if($this->session->userdata('status') == "login"){
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
			$this->load->view('header', $data_profile);
			$this->load->view('admin', $data_profile);
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
			$this->load->view('header', $data_profile);
			$this->load->view('userlist', $data_profile);
		}
	}

	public function userprofile(){
		if($this->session->userdata('status') == "login"){
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
			$this->load->view('header', $data_profile);
			$this->load->view('userprofile', $data_profile);
		}
	}

	public function uploadfoto(){
		$get_all_user = $this->muser->get_all_user("user");
		$data['username'] = $this->session->userdata('name');
		$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
		$decode_fullname = json_decode($get_fullname);
		$get_fullname_result = $decode_fullname[0]->fullname;
		$foto = $_FILES['fotoprofile'];
		if($foto = ''){}else{
			$config['upload_path'] = './assets/foto/';
			$config['allowed_types'] = 'jpg|png|gif';
			$this->load->library('upload', $config);
			
			if(!$this->upload->do_upload('fotoprofile')){
				echo 'Gagal upload';
			}else{
				$foto = $this->upload->data('file_name');
				$size = $this->upload->data('file_size');
				$username_profile = $this->input->post('username');

				$data_profile = array(
					'foto' => $foto,
					'username' => $data['username'],
					'all_user' => $get_all_user,
					'fullname' => $get_fullname_result
				);

				$this->db->set('foto', $data_profile['foto']);
				$this->db->where('username', $username_profile);
				$this->db->update('user');

				if($this->db->affected_rows() > 0){
					$this->load->view('userprofile', $data_profile);
				}
			}
		}

	}

}
