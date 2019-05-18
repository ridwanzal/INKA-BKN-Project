
<?php
/* model for user logins*/
class Muser extends CI_Model{	
	function get_all_user($table){			
		$sql = "SELECT * FROM .$table";
		$query = $this->db->query($sql);
		return json_encode($query->result());
	}	

	function get_user($table, $where){
		$sql = "SELECT * FROM .$table .$where";
		$query = $this->db->query($sql);
		return json_encode($query->result());
	}
}
?>