
<?php
/* model for user logins*/
class Mlaporan extends CI_Model{	
	function getall(){		
        $query = $this->db->get('laporan');
        $result = json_encode($query->result());
        return $result;
	}	
}
?>	