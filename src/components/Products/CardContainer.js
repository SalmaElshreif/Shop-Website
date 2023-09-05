import React, { Component, useEffect, useState } from "react";
import CardProduct from "./CardProduct"
import axios from "axios"
import { Button } from "react-bootstrap";
import "./CardProduct.css"

export default function CardContainer(props) {

  let [products, setProducts] = useState([]);
  let [productsNum, setproductsNum] = useState(9);

  useEffect(() => {
    getProducts();
  }, [productsNum]);

  let getProducts = async () => {

    let response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=1&limit=${productsNum}`)
    setProducts(response.data)
  };

  function Load() {

    setproductsNum(productsNum + 9)

}

  return (


    <div className="d-flex justify-content-center container py-5 gap-4 flex-wrap">
      {products.map((product, index) => (
        <CardProduct
          id = {product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          key={product.id}
          imgSrc={product.images[0]}
          categories={product.category?.name}
           />
      ))}
              <div className="col-md-12 text-center">
              <button onClick={Load} className="load">Load More</button>
        </div>

    </div>

    
  );

}
