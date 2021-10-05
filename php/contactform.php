<?php

if(isset($_POST['submit'])){
    $prenom = $_POST['prenom'];
    $nom =  $_Post['nom'];
    $mailFrom = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "ThomasGosselinPro@hotmail.com";
    $headers = "De: ".$mailFrom;
    $txt = "Tu as reçu un email de " .$prenom.".\n".$nom.\n\n".$message;

    mail($mailTo,$subjet,$txt,$headers);
    header("location: ../contact.html");

}



?>