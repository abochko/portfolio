<?php
session_start();
if($_POST['capcha'] != $_SESSION['rand_code']) echo "Капча введена неверно";
else echo "Капча введена верно";
?>