<?php
	$d = file_get_contents('http://ditu.amap.com/service/poiInfo?query_type=SPQ&city=350300&keywords='. urlencode('公厕') .'&pagesize=10&pagenum=1&qii=true&cluster_state=5&need_utd=true&utd_sceneid=1000&div=PC1000&addr_poi_merge=true&is_classify=true&geoobj=118.680287%7C25.346237%7C118.700887%7C25.363902');
	
	print_r($d);
?>