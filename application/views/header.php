<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<link rel="icon" href="https://www.gerflor.com.au/media/13-australia-website/quicksales-australia/faviconico.jpg">
	<meta charset="utf-8">
	<title><? print_r($title) ?></title>
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap.min.css" rel="stylesheet">
  <link href="<?php echo base_url() ?>/assets/css/main.css" rel="stylesheet">
  <link href="<?php echo base_url() ?>/assets/css/animate.css" rel="stylesheet">

  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
	crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js"></script>

	
	<!-- <link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> -->
	<!-- <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet"> -->
	<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> -->
</head>
<body>
		<div class="container container_main">
				<div class="row">	
					<div class="col-md-6">
						<p>Dashboard Admin</p>
						<span>Selamat Datang, <b><? 
							// print_r($userlist);
							print_r($fullname);
						?></b></span>
					</div>
					<div class="col-md-6 text-right" id="navbarlist">
					  <a href="<?php echo base_url('admin/'); ?>" style="color:#999;"><span>Beranda</span></a>&nbsp;&nbsp;
					  <a href="<?php echo base_url('admin/kegiatan/'); ?>" style="color:#999;"><span>Kegiatan</span></a>&nbsp;&nbsp;
						<a href="<?php echo base_url('admin/userlist'); ?>" style="color:#999;"><span>Daftar User</span></a>&nbsp;&nbsp;
						<a href="<?php echo base_url('admin/userprofile'); ?>" style="color:#999;"><span>Profil</span></a>&nbsp;&nbsp;
						<a href="<?php echo base_url('admin/logout'); ?>" style="color:#999;"><span>Keluar</span></a>&nbsp;&nbsp;
					</div>
        </div>