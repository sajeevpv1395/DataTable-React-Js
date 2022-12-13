import React from 'react'

import { useState,useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
function ApiDataTable() {
   
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
  
    const getProductData = async () => {
      try {
        const data = await axios.get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        );
        console.log(data.data);
        setProduct(data.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getProductData();
    }, []);
  return (
    <div>
      <h1>hiiii</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
             
            {product.filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
       .map((item) => {
          return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.product_type}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
              </tr>
                  );
                })}
            </tbody>
          </Table>
      
    </div>
  )
}

export default ApiDataTable
