
<?php
/* model for user logins*/
class Muser extends CI_Model{	
	function get_all_user($table){			
		$sql = "SELECT * FROM .$table";
		$query = $this->db->query($sql);
		return json_encode($query->result());
	}	

	function get_user_byname($table, $field, $name){
		$sql = "SELECT fullname FROM $table where $field = '$name'";
		$query = $this->db->query($sql);
		return json_encode($query->result());
	}

	function get_fotoname($table, $field, $val){
		$sql = "SELECT foto FROM $table where $field = '$val'";
		$query = $this->db->query($sql);
		return json_encode($query->result());
	}
}
?>