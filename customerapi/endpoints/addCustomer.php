<?php
error_reporting(E_ALL);
ini_set('display_error', 1);



include_once('../config/Database.php');
include_once('../models/Post.php');



$database = new Database();
$db = $database->connect();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

if(count($_POST))
{
  
  $params = [
    'customer_name' => $_POST['customer_name'],
    'age' => $_POST['age'],
    'address' => $_POST['address'],
  ];

  if($post->createNewCustomer($params))
  {
    echo json_encode(['message' => ' Post added successfully']);
  }

}
else if(isset($data))
{
  $params = [
    'customer_name' => $data->customer_name,
    'age' => $data->age,
    'address' => $data->address,
  ];

  if($post->createNewCustomer($params))
  {
    echo json_encode(['message' => ' Post added successfully']);
  }

}



?>