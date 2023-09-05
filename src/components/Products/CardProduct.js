import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardProduct.css' ;

import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {

    let {title , description , imgSrc , price , categories} = this.props;

    return (
      
      <div className='col-3'>
      <Card style={{ width: '18rem' , height:'35rem' , overflow:'hidden'}}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>

        <Card.Title className='title'>{title}</Card.Title>
        
        <Card.Text className='text-black-50'> {description}. </Card.Text>

        <Card.Text className='price'> Price is : {price}$ </Card.Text>

        <Card.Text className='category'> Category : {categories}. </Card.Text>

        <Link to={`/products/${this.props.id}`} className="btn1">Learn More</Link>

        <Link to={"/cart"}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawVLW6KPVgAl73I387sD7mR7QFOtej4nm3Q&usqp=CAU" className='add'/></Link>

      </Card.Body>
    </Card>

    </div>
    
    )

  }
}
