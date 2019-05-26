        <br/>
				<?
				?>
				<img width="150" height="150" src="<?php echo base_url() ?>/assets/foto/<?echo $foto?>">
				<br/><br/>
				<?php echo form_open_multipart('index.php/admin/uploadfoto') ?>
					<p>Username</p>
					<input type="text" disabled="disabled" class="form-control" name="username" value=<?php echo $username?>>
					<br/>	
					<p>Nama</p>
					<input type="text" disabled="disabled"  placeholder="Silahkan update nama anda" class="form-control" name="name" value="<?php echo $fullname?>">
					<br/>	
					<p>Profile photos</p>
					<input type="hidden" name="username" value=<?php echo $username?>>
					<input type="file" name="fotoprofile" class="form-control" required><br/>
					<input type="submit" class="btn btn-primary">
				<?php echo form_close(); ?>
		</div>
</body>
<script>
  $( document ).ready(function() {
   
  });
</script>
</html>