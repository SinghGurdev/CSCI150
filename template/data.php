<?php
    $servername = "localhost";
    $username = "webPage2";
    $password = "123";
    $database = "classinfo";
    $table;
    $column;
    $serach;
    $file = fopen("temp.json","w") or die("Unable to open file!");

    $conn = new mysqli($servername, $username, $password, $database);
    if($conn->connect_error) die("Connection Fail: ". $conn->connect_error);

    if($_SERVER["REQUEST_METHOD"] == "GET") {
        $table = strval($_GET['table']);
        $column = strval($_GET['column']);
        $serach = strval($_GET['serach']);

        if(!$column)$sql = "SELECT * FROM `".$table."`;";
        else $sql = "SELECT * FROM `".$table."` WHERE `".$column."` = '".$serach."';";

        $result = $conn->query($sql); 
        if($result->num_rows > 0){
            $row = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($row);
            $temp1 =json_encode($row);
            fwrite($file,$temp1);
        } else {
            echo "wtf";
            echo '<br>';
            echo $serach;
        }
    }

    $conn->close();
    fclose($file);
?>