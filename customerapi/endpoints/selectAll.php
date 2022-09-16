<?php

error_reporting(E_ALL);
ini_set('display_error', 1);

// Headers

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');

// including required files.
include_once('../config/Database.php');
include_once('../models/Post.php');



// connecting with database

$database = new Database();
$db = $database->connect();

$post = new Post($db);

$data = $post->getAllCustomers();

if($data->rowCount())
{

  $posts = [];

  // Rearrange the data

  while($row= $data->fetch(PDO::FETCH_OBJ))
  {
    $posts[] = [
      'customer_id' => $row->customer_id,
      'customer_name' => $row->customer_name,
      'age' => $row->age,
      'address' => $row->address,

    ];
  }

  echo json_encode($posts);

}
else
{
  echo json_encode(['message' => ' No posts found']);
}




?>