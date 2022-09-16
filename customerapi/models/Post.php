<?php

error_reporting(E_ALL);
ini_set('display_error', 1);

class Post{

  // Post Properties
  public $customer_id;
  public $customer_name;
  public $age;
  public $address;

  // Database Data
  private $connection;
  private $table = 'customers';

  public function __construct($db)
  {
    $this->connection = $db;
    
  }


  // Method to get all customer data

  public function getAllCustomers()
  {
    $sql = 'SELECT * FROM '.$this->table;
    
  
    $query=$this->connection->prepare($sql);

    $query->execute();

    return $query;
  }

  // Method to get single customer data

  public function getSingleCustomer($id)
  {
    $this->customer_id = $id;

    $sql = 'SELECT * FROM '.$this->table.' WHERE customer_id = :id';

    $query = $this->connection->prepare($sql);

    $query->bindValue('id', $this->customer_id);

    $query->execute();

    return $query;

  }

  // Method to create new customer data

  public function createNewCustomer($params)
  {
    try
    {
      // Assigning values

      $this->customer_name = $params['customer_name'];
      $this->age = $params['age'];
      $this->address = $params['address'];


      $sql = 'INSERT INTO '.$this->table.' 
          SET 
            customer_name = :name,
            age = :age,
            address = :address';

      
      $query =$this->connection->prepare($sql);

      $query->bindValue('name', $this->customer_name);
      $query->bindValue('age', $this->age);
      $query->bindValue('address', $this->address);

      if($query->execute())
      {
        return true;
      }
      
      return false;
    }

    catch(PDOException $e)
    {
      echo $e->getMessage();
    }

  }

  // Method to update customer data

  public function updateCustomer($params)
  {
    try
    {

      $this->customer_id = $params['customer_id'];
      $this->customer_name = $params['customer_name'];
      $this->age = $params['age'];
      $this->address = $params['address'];
  
      $sql = 'UPDATE '.$this->table.' 
            SET 
              customer_name = :name,
              age = :age,
              address = :address
              WHERE customer_id = :id';
  
  
      $query = $this->connection->prepare($sql);
  
      $query->bindValue('id', $this->customer_id);
      $query->bindValue('name', $this->customer_name);
      $query->bindValue('age', $this->age);
      $query->bindValue('address', $this->address);

      if($query->execute())
      {
        return true;
      }
      
      return false;

    }

    catch(PDOException $e)
    {
      echo $e->getMessage();
    }

  }

  // Method to delete customer

  public function deleteCustomer($id)
  {
    try
    {

      $this->customer_id = $id;

      $sql = 'DELETE FROM '.$this->table.' WHERE customer_id = :id';

      $query = $this->connection->prepare($sql);

      $query->bindValue('id', $this->customer_id);

      if($query->execute())
      {
        return true;
      }

      return false;

    }
    catch(PDOException $e)
    {
      echo $e->getMessage();
    }

  }

}






?>