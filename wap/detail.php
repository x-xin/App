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

	for ($i = 1; $i <= 10000; $i++) { 
		$str[] = $array;
	} 
	
	$str = array(
		'rows' => $str
	);
	
	//echo 'success_jsonpCallback('.json_encode($str).')';
?>

<!DOCTYPE HTML>
<html lang="zh-lang">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="/wap/wap/dest/css/styles.css" media="all"/>
	<script src="/wap/wap/dest/js/metareset.js"></script>
	<script src="/wap/wap/dest/js/template.js"></script>
	<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body class="page-line-detail">

	<div id="list">
		<ul>
			<?php foreach($str['rows'] as $key => $item){
				echo '<li>id: '. $item["id"] .'name:'. $item["name"] .'sex:'. $item["sex"] .'</li>';
			}?>
			
		</ul>
	</div>
	
	<div class="lt-block price">
		<div class="header">
			<img src="/wap/img/1.png" alt=""/>
			<div class="bar">
				<div class="fn-clear">
					<div class="fn-left"><span>跟团游</span><em>|</em><span>行程3天</span></div>
					<div class="fn-right"><span>飞机（去程）</span><em>|</em><span>动车（返程）</span></div>
				</div>
				<div class="bar-bg"></div>
			</div>
		</div>
		<div class="title">
			厦门鼓浪屿、集美、鳌园3日游单介绍费的发明年还来旅游
		</div>
		<div class="priceInfo fn-clear">
			<div class="fn-left">成人：<em>￥<i>1750</i>起</em></div>
			<div class="fn-right">儿童：<em>￥<i>1750</i>起</em></div>
		</div>
		<div class="remark fn-clear">
			<div class="fn-left">请至少提前<em>5天</em>报名</div>
			<div class="fn-right"><i class="icon-question"></i>起价说明</div>
		</div>
	</div>
	
	<div class="lt-block contact">
		<ul>
			<li>出发城市：上海</li>
			<li>目 的 地：厦门  漳州</li>
			<li>
				无购物  无自费
				供应商：上海群星旅行社（乐乐旅游）
				联系电话：021-61318878
			</li>
		</ul>
	</div>
	
	<div class="lt-block detail">
		<ul class="tab">
			<li>线路特色</li>
			<li>行程安排</li>
			<li>费用说明</li>
			<li>预订须知</li>
		</ul>
		<div class="wrap">
			<div class="title">线路特色</div>
			<div class="main">	鼓浪屿岛上海岸线蜿蜒曲折，坡绥沙细的天然海滨浴场环布四周，鬼斧神工的碎石奇趣天成，令人遐想万千。岛上岗峦起伏，错落有致。最高峰日光岩是厦门的象征，有未上日光岩等于没到厦门之说，鼓浪屿四季如春，气候宜人，树木繁茂，鸟语花香，空气清新，今人心旷神怡；山和海相拥，自然造化和人工雕凿相映成趣，日光岩、菽庄花园、皓月园、毓园更为园中园胜景。
			</div>
		</div>
		<div class="wrap">
			<div class="title">行程安排</div>
			
			第一天：上海-厦门
			
			上海航班赴厦门，入住酒店，自由活动。住宿厦门，可到酒店附近走走。
		</div>
		<div class="wrap">
			<div class="title">费用说明</div>
			
			费用包含：
			1、所列景点大门票；
			2、住宿及餐饮；
			3、地接导游服务。
			 
			费用不包含：
			1、不含航空保险，旅游意外险；
			2、游客自行消费。
		</div>
		<div class="wrap">
			<div class="title">预订须知</div>
			
			1、可到我社直接签定合同并付费；
			2、由我社工作人员免费上门签定合同并收款。
		</div>
	</div>

</body>
</html>