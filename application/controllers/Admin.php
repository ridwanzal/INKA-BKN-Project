<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	function __construct(){
    parent::__construct();		
    if($this->session->userdata('status') != "login"){
			redirect(base_url("index.php/login"));
    }
		$this->load->model('mlogin');
		$this->load->model('muser');
		$this->load->helper('form');
		$this->load->model('mtask');
		$this->load->model('mlaporan');
	}

	public function index(){
		if($this->session->userdata('status') == "login"){
			$data['username'] = $this->session->userdata('name');
			$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
			$decode_fullname = json_decode($get_fullname);
			$get_fullname_result = $decode_fullname[0]->fullname;
			$get_foto = $this->muser->get_fotoname("user", "username", $data['username']); 
			$decode_foto = json_decode($get_foto);
			$get_foto_result = $decode_foto[0]->foto;

			$data_profile = array(
				'title' => 'Home | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'fullname' => $get_fullname_result
			);
			$this->load->view('header', $data_profile);
			$this->load->view('admin', $data_profile);
			$this->load->view('footer', $data_profile);
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
				'title' => 'Daftar User | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'all_user' => $get_all_user,
				'fullname' => $get_fullname_result
			);
			$this->load->view('header', $data_profile);
			$this->load->view('userlist', $data_profile);
			$this->load->view('footer', $data_profile);
		}
	}

	public function userprofile(){
		if($this->session->userdata('status') == "login"){
			$data['username'] = $this->session->userdata('name');
			$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
			$decode_fullname = json_decode($get_fullname);
			$get_fullname_result = $decode_fullname[0]->fullname;
			$get_foto = $this->muser->get_fotoname("user", "username", $data['username']); 
			$decode_foto = json_decode($get_foto);
			$get_foto_result = $decode_foto[0]->foto;
			
			$data_profile = array(
				'title' => 'Profile | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'fullname' => $get_fullname_result
			);
			$this->load->view('header', $data_profile);
			$this->load->view('userprofile', $data_profile);
			$this->load->view('footer', $data_profile);
		}
	}

	public function uploadfoto(){
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
					'title' => 'Upload Foto | INKA',
					'foto' => $foto,
					'username' => $data['username'],
					'fullname' => $get_fullname_result
				);

				$this->db->set('foto', $data_profile['foto']);
				$this->db->where('username', $username_profile);
				$this->db->update('user');

				if($this->db->affected_rows() > 0){
					$this->load->view('header', $data_profile);
					$this->load->view('userprofile', $data_profile);
				}
			}
		}
	}

	public function kegiatan(){
		if($this->session->userdata('status') == "login"){
			$get_all_user = $this->muser->get_all_user("user");
			$data['username'] = $this->session->userdata('name');
			$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
			$decode_fullname = json_decode($get_fullname);
			$get_fullname_result = $decode_fullname[0]->fullname;
			$get_foto = $this->muser->get_fotoname("user", "username", $data['username']); 
			$decode_foto = json_decode($get_foto);
			$get_foto_result = $decode_foto[0]->foto;
			$get_all_task = $this->mtask->getall();
			$get_all_laporan = $this->mlaporan->getall();
			
			$get_submit_laporan = $this->input->post('submit_laporan');
			if($get_submit_laporan){
					$get_lname = $this->input->post('name_lp');
					$get_ldesc = $this->input->post('desc_lp');
					$data_insert = array(
						'nama' => $get_lname,
						'deskripsi' => $get_ldesc,
					);
					$this->db->insert('laporan', $data_insert);
					redirect(base_url('index.php/admin/kegiatan'));
					// $check = $this->db->affected_rows() > 0;
			}

			$data_profile = array(
				'title' => 'Daftar Kegiatan | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'all_user' => $get_all_user,
				'fullname' => $get_fullname_result,
				'all_task' => $get_all_task,
				'all_laporan' => $get_all_laporan
			);

			$this->load->view('header', $data_profile);
			$this->load->view('kegiatan', $data_profile);
			$this->load->view('footer', $data_profile);
		}
	}

	public function addtask(){
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
				'title' => 'Tambah Kegiatan | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'all_user' => $get_all_user,
				'fullname' => $get_fullname_result,
			);
			$this->load->view('header', $data_profile);
			$this->load->view('addtask', $data_profile);
			$this->load->view('footer', $data_profile);
		}
	}

	public function submitask(){
		if($this->session->userdata('status') == "login"){
			$get_all_user = $this->muser->get_all_user("user");
			$data['username'] = $this->session->userdata('name');
			$get_fullname = $this->muser->get_user_byname("user", "username", $data['username']);
			$decode_fullname = json_decode($get_fullname);
			$get_fullname_result = $decode_fullname[0]->fullname;
			$get_foto = $this->muser->get_fotoname("user", "username", $data['username']); 
			$decode_foto = json_decode($get_foto);
			$get_foto_result = $decode_foto[0]->foto;

			$nama_kegiatan = $this->input->post('nama_kegiatan');	
			$tanggal_mulai = $this->input->post('date_start');
			$tanggal_selesai = $this->input->post('date_end');

			if($nama_kegiatan != '' || $tanggal_mulai != '' || $tanggal_selesai != ''){
				$data_insert = array(
					'nama_kegiatan' => $nama_kegiatan,
					'date_started' => $tanggal_mulai,
					'date_end' => $tanggal_selesai
				);

				$this->db->insert('task', $data_insert);
				$check = $this->db->affected_rows() > 0;
				if($check){
					//
				}
			}

			$data = array(
				'title' => 'Tambah Kegiatan | INKA',
				'foto' => $get_foto_result,
				'username' => $data['username'],
				'all_user' => $get_all_user,
				'fullname' => $get_fullname_result,
			);
			$this->load->view('header', $data);
			$this->load->view('addtask', $data);
			$this->load->view('footer', $data);
		}
	}

}
