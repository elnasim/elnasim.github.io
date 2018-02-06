<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="">
	<meta name="author" content="">

	<link rel="icon" href="">

	<title>Landing Page - environment for development</title>

	<!-- include css libraries -->
	<link href="dist/css/libs.min.css" rel="stylesheet">

	<!-- include common css -->
	<link href="dist/css/common.min.css" rel="stylesheet">
</head>
<body>


	<form class="form ajax-form validate" id="form1">

		<label>
			<span>Имя</span>
			<input type="text" name="form1UserName" id="form1UserName" placeholder="Иван Дорн">
		</label>

		<label>
			<span>Телефон</span>
			<input type="text" name="form1UserPhone" id="form1UserPhone" class="masked-phone-by" placeholder="Телефон">
		</label>

		<label>
			<input type="hidden" name="handlerAjaxForm" value="form1">
			<button class="ajax-send-button">
				<i class="ajax-progress-send-form"><img src="/dist/img/loading-fb-style.gif" style="display: none;"></i>
				Записаться
			</button>
		</label>

	</form>

	<!-- include js libraries -->
	<script src="dist/js/libs.min.js"></script>

	<!-- include main common js -->
	<script src="dist/js/common.min.js"></script>
</body>
</html>