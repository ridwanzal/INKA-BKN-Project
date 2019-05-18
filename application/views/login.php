<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="https://www.gerflor.com.au/media/13-australia-website/quicksales-australia/faviconico.jpg">
	<meta charset="utf-8">
	<title>INKA Operasional</title>
    <style type="text/css">
        *{
                font-family: 'Lato', sans-serif;
        }
		body{
				background-color:#5286F3;
				font-size:14px;
				color:#fff;
                overflow-x : hidden;
		}
		.simple-login-container{
				width:350px;
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
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>
<body>
<form action="<?php echo base_url('index.php/login/submit'); ?>" method="post" style="margin-top:10%;">
    <div class="simple-login-container">
        <h2>Silahkan Login</h2>
        <br/>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" placeholder="Username" name="username">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="password" placeholder="Enter your Password" class="form-control" name="password">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 form-group">
                <input type="submit" class="btn btn-block btn-login" value="Login" name="submit">
            </div>
        </div>
        <?php
            if($this->session->flashdata('error')){ ?>
                <div class="alert alert-danger alert-dismissible"><?php echo $this->session->flashdata('error') ?>
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                </div>
                <?    }
        ?>
        <div class="row text-center">
            <div class="col-md-12">
            <label style="font-size:12px; text-align:center; color:#ccc;">Belum punya akun silahkan <span style="cursor:pointer; color:#3891c9;" id="register"> Register</span></label>
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
  // let arr_link = ['user'];
  $( document ).ready(function() {
    let x = $('#clicks');
    x.on('click', function(){
      location.href = "index.php/frontpage/user/";
    });

    let register = $('#register');
    register.on('click', function(){
        location.href = "register";
    });
  });
</script>
</html>