<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Register | INKA</title>
  <style type="text/css">
    *{
                font-family: 'Lato', sans-serif;
    }
		body{
				background-color:#5286F3;
				font-size:14px;
				color:#fff;
                font-family: 'Lato', sans-serif;
                overflow-x : hidden;
		}
		.simple-login-container{
				width:300px;
				max-width:100%;
				margin:50px auto;
                background: #ffff;
                border: 1px solid #eee;
                padding: 31px;
                border-radius: 4px;
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
    input{
        font-size : 14px !important;
    }
	</style>
  <link rel="icon" href="https://www.gerflor.com.au/media/13-australia-website/quicksales-australia/faviconico.jpg">
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>
<body>
<form action="<?php echo base_url('register/submit'); ?>" method="post" style="margin-top:5%;">
    <div class="simple-login-container">
        <h2>Silahkan Register</h2>
        <br/>
        <!-- <div class="row">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" placeholder="Full Name" name="fullname">
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" placeholder="Username" name="username" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" placeholder="Nama" name="name" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="password" placeholder="Enter your Password" class="form-control" name="password" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="password" placeholder="Enter your Password" class="form-control" name="password2" required>
            </div>
        </div>
        <?php
            if($this->session->flashdata('error')){ ?>
                <div class="alert alert-danger alert-dismissible"><?php echo $this->session->flashdata('error') ?>
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
                <?    }
        ?>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="submit" class="btn btn-block btn-login" value="Register" name="submit">
            </div>
        </div>
        <div class="row text-center">
            <div class="col-md-12">
            <label style="font-size:12px; text-align:center; color:#ccc;">Sudah punya akun silahkan <span style="cursor:pointer; color:#3891c9;" id="login"> Login</span></label>
            </div>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-md-12">
            <label style="font-size:12px; text-align:center; color:#ccc;">Copyright INKA BKN 2019</label>
        </div>
    </div>
</form>

</body>
<script>
  $( document ).ready(function() {
    let login = $('#login');
    login.on('click', function(){
        location.href = "login";
    });
  });
</script>
</html>