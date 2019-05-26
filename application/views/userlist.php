        <br/>
        <table id="tables" class="table table-striped table-bordered" width="100%">
        <thead>
            <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Fullname</th>
            </tr>
				</thead>        
				<tbody>
				</tbody>
        </table>
		</div>
</body>
<script>
  $( document ).ready(function() {
    $('#tables').DataTable( {
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
</html>