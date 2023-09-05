import React, { useEffect , useState  } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import './ProductRoutes.css'


export default function ProductRoutes() {

  let {id} = useParams() ;

  let [ID, setID] = useState(id);  
  let [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${ID}`)
      .then((response) => {
        setProduct(response.data);
      })
  }, [id, ID]);
  

  return (

    <div>

                  <img className='image' src={Product.images} alt="img"/>

                  <p className = "txtId"> ID : <span> {Product.id} </span></p>

                  <p className = "txtId"> Title : <span> {Product.title} </span></p>     

                  <p className = "txtId"> Description : <span> {Product.description}. </span></p>     

                  <p className = "txtId"> Price : <span> {Product.price}$ </span></p>    

                  <Link to={"/home"} className="back">Back Home</Link>
                                     

    </div>

  )
}
