<?php
//set the token and remove from POST array
$token = $_POST['token'];
unset($_POST['token']);
//check for empty fields and remove from array
foreach ($_POST as $key => $value) {
    if(empty($value)){
        unset($_POST[$key]);
    }
}
//convert to json
$body = json_encode($_POST);

$request = curl_init();
curl_setopt($request, CURLOPT_URL, "https://nbtl.mesacc.edu/superuser/honors-api/stories/");
curl_setopt($request, CURLOPT_HEADER, 1);
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_HTTPHEADER, array("token:$token"));
curl_setopt($request, CURLOPT_POSTFIELDS, $body);
curl_exec($request);
?>