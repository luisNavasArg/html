 <?php    include("mpdf60/mpdf.php");
    $mpdf=new mPDF();
    $html="http://www.w3c.es/";
    $html2=" <!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>T�tulo de documento</title>
</head>

<body>
Content of the document......
</body>

</html> ";

    // La variable $html es vuestro c�digo que quer�is pasar a PDF
    $html = utf8_encode($html);

    $mpdf->WriteHTML($html);

    // Genera el fichero y fuerza la descarga
    $mpdf->Output('miPdf.pdf','D'); exit;
    
    ?>