
<?php
/* model for user logins*/
class Mtask extends CI_Model{	
	function getall(){		
    $query = $this->db->get('task');
    $result = json_encode($query->result());
    return $result;
	}	
}
?>	