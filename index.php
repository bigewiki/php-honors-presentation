<!doctype html>
<html>
	<head>
	<?php require_once('inc/header.inc.html'); ?>
	</head>
	<body>
		<div class="reveal">
			<div class="slides">
				<?php
					$numSlides = 20;

					for ($i = 1; $i <= $numSlides; $i++) {
						require_once("inc/slide$i.inc.html");
					}
				?>
			</div>
		</div>
	</body>
</html>
