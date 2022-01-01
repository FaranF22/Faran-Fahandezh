<?php
    try{
        $expression = $_REQUEST['expression'];
        $result = eval('return '.$expression.';');
        echo $result;
    }
    catch(ParseError $e){
        echo "Invalid Input";
    }
    echo "&emsp;<a href='index.html'>Back</a>";
?>
