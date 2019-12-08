<?php
//https://stackoverflow.com/questions/3032643/php-get-request-sending-headers

$token = $_POST['token'];

// Create a stream
$opts = array(
    'http'=>array(
        'method'=>"POST",
        'header'=>"Accept-language: en\r\n" .
                  "token: $token"
    )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents('https://muniz.dev/honors-api/v1/users/check-token', false, $context);
echo $file;
?>