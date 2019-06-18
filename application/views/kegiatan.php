<br/>
<a href="<?php echo base_url('index.php/admin/addtask'); ?>"><button class="btn btn-primary">Tambah Kegiatan Baru</button></a>
<a href="<?php echo base_url('index.php/admin/addtask'); ?>"><button class="btn btn-primary">Tambah Kegiatan Baru Langsung</button></a>
&nbsp;<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Buat Laporan</button>
<br/>
<hr>
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Buat Laporan Baru</h4>
          </div>
          <div class="modal-body">
            <?php echo form_open_multipart('index.php/admin/kegiatan'); ?>
              <div class="row">
                <div class="col-md-12 form-group">
                    <input type="text" placeholder="Nama Laporan" class="form-control" name="name_lp" required>
                </div>
                <div class="col-md-12 form-group">
                  <textarea placeholder="Deskripsi Laporan" class="form-control" name="desc_lp"></textarea>
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <input type="submit" class="btn btn-primary" name="submit_laporan">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
          <?php echo form_close();?>
        </div>

      </div>
    </div>

    <div>
        <label>Daftar Kegiatan</label>
        <table id="tables" class="table table-striped table-bordered" width="100%">
          <thead>
              <tr>
                  <th>Nama Kegiatan</th>
                  <th>Tanggal Mulai</th>
                  <th>Tanggal Selesai</th>
              </tr>
              </thead>        
              <tbody>
              </tbody>
            </table>
		</div>

    <hr>
    
    <div>
        <label>Daftar Laporan</label>
        <table id="tables2" class="table table-striped table-bordered" width="100%">
          <thead>
              <tr>
                  <th>Nama Laporan</th>
                  <th>Deskripsi</th></th>
              </tr>
              </thead>        
              <tbody>
              </tbody>
            </table>
		</div>

<script>
  $( document ).ready(function() {
    $('#tables').DataTable({
        data : 	<? print_r($all_task) ?>,
        paging : true,
        columns: [
          { data: 'nama_kegiatan' },
          { data: 'date_started' },
          { data: 'date_end' },
        ]
    });

    $('#tables2').DataTable({
        data : 	<? print_r($all_laporan) ?>,
        paging : true,
        columns: [
          { data: 'nama' },
          { data: 'deskripsi' },
        ]
    });
  });
</script>