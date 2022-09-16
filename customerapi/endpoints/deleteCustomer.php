<?php

error_reporting(E_ALL);
ini_set('display_error', 1);



include_once('../config/Database.php');
include_once('../models/Post.php');



$database = new Database();
$db = $database->connect();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

if(isset($data))
{

  if($post->deleteCustomer($data->customer_id))
  {
    echo json_encode(['message' => 'Post Deleted Successfully']);
  }

}




?>