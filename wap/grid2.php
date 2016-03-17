<?php
	
	$array = array(
		'id'  => 1,
		'name' => "张三1",
		'type' => "经理",
		'sex' => "男",
		'part' => "12.11",'num' => "2.00",
		'email' => "zhangsan@a.com",
		'chlidren' => array(
			array(
				'id'  => 1,
				'name' => "张三1",
				'type' => "经理",
				'sex' => "男",
				'part' => "12.11",'num' => "2.00",
				'email' => "zhangsan@a.com"
			),
			array(
				'name' => "李四",
				'type' => "经理",
				'sex' => "女",
				'part' => "12.11",'num' => "2.00",
				'email' => "zhangsan@a.com"
			)
		)
	);
	
	$str = array();

	for ($i = 1; $i <= 100000; $i++) { 
		$str[] = $array;
	} 
	
	$str = array(
		'rows' => $str
	);
	
	echo 'success_jsonpCallback('.json_encode($str).')';
?>