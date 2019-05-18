<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<link rel="icon" href="https://www.gerflor.com.au/media/13-australia-website/quicksales-australia/faviconico.jpg">
	<meta charset="utf-8">
	<title>INKA Admin</title>
	<style type="text/css">
		*{
                font-family: 'Lato', sans-serif;
    }
		body{
				background-color:#5286F3;
				font-size:14px;
				color:#fff;
				margin-bottom : 100px;
		}
		.simple-login-container{
				width:300px;
				max-width:100%;
				margin:50px auto;
		}
		.simple-login-container h2{
				text-align:center;
				font-size:20px;
		}

		.simple-login-container .btn-login{
				background-color:#FF5964;
				color:#fff;
		}
		a{
				color:#fff;
		}
		.division{
			cursor : pointer;
		}
		.boldtext{
			font-weight:600;
			color: #666;
		}
		.container_main {
			margin-top : 3%;
			margin-bottom : 3%;
		}
		.container_main > div > h2{
			font-size:20px;
		}
		.pointer{
			cursor : pointer;
		}
		.logoutbtn{
			background : #ed5e5e;
			color : #fff;
			border : 1px solid #ed5e5e;
			padding : 4px 12px 4px 12px;
			border-radius : 4px;
		}
		.container_menu{
			margin-bottom : 70px;
		}
	</style>
	
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
	crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
</head>
<body>
		<div class="container container_main">
				<div class="row">
					<div class="col-md-6">
						<h2>INKA Admin</h2>
						<span>Selamat Datang, <b><? 
							print_r($username);
							// print_r($alluser);
						?></b></span>
					</div>
					<div class="col-md-6 text-right">
						<a href="<?php echo base_url('index.php/admin/'); ?>" style="color:#999;"><span>Beranda</span></a>&nbsp;&nbsp;
						<a href="<?php echo base_url('index.php/admin/userlist'); ?>" style="color:#999;"><span>Daftar User</span></a>&nbsp;&nbsp;
						<a href="<?php echo base_url('index.php/admin/logout'); ?>" style="color:#999;"><span>Keluar</span></a>&nbsp;&nbsp;
					</div>
				</div>
		</div>

		<div class="container container_menu">
			<div class="row">
		
				<div class="col-lg-4 col-md-4 col-xs-12 division" id="menu1">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Bagian Keuangan</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12 division">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12 division">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

			</div>
			<br/>

			<!-- row 2 -->
			<div class="row">
		
				<div class="col-lg-4 col-md-4 col-xs-12 division">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12 division">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12 division">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

			</div>
			<br/>

			<!-- row 2 -->
			<div class="row">
		
				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-4 col-xs-12">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title boldtext">Special title treatment</h5>
							<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							<a href="#" class="btn btn-primary">Open Menu</a>
						</div>
					</div>
				</div>

			</div>

		</div>
</body>
<script>
  $( document ).ready(function() {
    
  });
</script>
</html>