<?php

try {
    $db = new PDO('sqlite:game.sqlite');
    // $db->exec("CREATE TABLE groups(id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT, email TEXT )"); 
    // $db->exec("INSERT INTO groups(name, email) VALUES ('Wil', 'wil@wil.com')");
    // $db->exec("INSERT INTO groups(name, email) VALUES ('Ricchy', 'Ricchy@wil.com')");
    // $db->exec("INSERT INTO groups(name, email) VALUES ('Latif', 'Latif@wil.com')");

    $result = $db->query('SELECT * from groups where name = "Wil" AND email = "wil@wil.com"');

    $message = "Hi, how are you doing?";

    mail('dimitriomorales01@gmail.com', 'Email Subject', $message);

    print "<table border=1>";
    print "<tr> <td> Id</td> <td> Name</td> <td> email</td></tr>";

    foreach($result as $row) {
        print "<tr> <td> ". $row['id'] ."</td> <td>  ". $row['name'] ."</td> <td>  ". $row['email'] ."</td></tr>";
    };
    print "</table>";
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>