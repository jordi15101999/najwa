<?php
print_r($_POST);
$a = fopen("save.txt", "a");
fwrite($a, "Location: https://www.google.com/maps/place/$_POST[lat]+$_POST[lng] . \n");
fclose($a);
