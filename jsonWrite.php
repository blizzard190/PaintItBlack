<?php
$debug = true;
$control = "";
$filePath = "preload.json";

if(!empty($_GET['put'])){
  $control = $_GET['put'];
}

$file = fopen($filePath, "w") or die("can't open file");
echo $control;
fwrite($file,$control);
fclose($file);
 ?>
