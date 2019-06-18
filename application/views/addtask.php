<br/>
<div class="simple-login-container2">
        <h2>Tambah Kegiatan</h2>
        <br/>
        <?php echo form_open_multipart('index.php/admin/submitask'); ?>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="text" class="form-control" placeholder="Nama Kegiatan" name="nama_kegiatan" required>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="file" class="form-control" placeholder="File Upload" name="file_upload">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="date" placeholder="Tanggal Dimulai" class="form-control" name="date_start" required>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <input type="date" placeholder="Tanggal Selesai" class="form-control" name="date_end" required>
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
                    <input type="submit" class="btn btn-block btn-login" value="Tambahkan Kegiatan" name="submit">
                </div>
            </div>
        <? echo form_close();?>
    </div>
<script>
  $( document ).ready(function() {
    $('#tables').DataTable({
      data : 	<? print_r($all_user) ?>,
			paging : true,
      columns: [
      { data: 'id' },
      { data: 'username' },
      { data: 'fullname' },
    ]
    });
  });
</script>