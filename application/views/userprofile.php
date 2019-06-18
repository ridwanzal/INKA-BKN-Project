				<br/>
				<div class="row">
					<div class="col-lg-2 col-md-3 col-xs12">
						<img id="img_profile" width="150" height="150" class="animated fadeIn"
						src="<?php echo base_url() ?>/assets/foto/<?echo $foto?>"
						onerror="this.onerror=null;this.src='https://www.konitala.or.id//asset/foto_dewan/blank.png';">
					</div>
					<div class="col-lg-10 col-md-10 col-xs-12">
							<?php echo form_open_multipart('index.php/admin/uploadfoto'); ?>
								<p>User Name</p>
								<input type="text" disabled="disabled" class="form-control" name="username" value=<?php echo $username?>>
								<br/>	
								<p>Full Name</p>
								<input type="text" disabled="disabled"  placeholder="Silahkan update nama anda" class="form-control" name="name" value="<?php echo $fullname?>">
								<br/>	
								<p>Profile Photos</p>
								<input type="hidden" name="username" value=<?php echo $username?>>
								<input type="file" name="fotoprofile" class="form-control" required><br/>
								<input type="submit" class="btn btn-primary">
							<?php echo form_close(); ?>
					</div>
				</div>
		</div>