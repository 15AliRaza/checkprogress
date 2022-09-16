<?php

error_reporting(E_ALL);
ini_set('display_error', 1);


include_once('../config/Database.php');
include_once('../models/Post.php');



$database = new Database();
$db = $database->connect();

$post = new Post($db);

if(isset($_GET['customer_id']))
{
  echo $_GET['customer_id'];

  $data = $post->getSingleCustomer($_GET['customer_id']);

  if($data->rowCount())
  {
    $posts = [];

    while($row= $data->fetch(PDO::FETCH_OBJ))
    {
      $posts[]=[
        'customer_id' => $row->customer_id,
        'customer_name' => $row->customer_name,
        'age' => $row->age,
        'address' => $row->address,
      ];
    }

    echo json_encode($posts);

  }
  else{
    echo json_encode(['message' => ' No posts found']);
  }



}









?>