import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

import React, { Component } from 'react'

export default class Slider1 extends Component {
  render() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{"height": "400px"}}
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{"height": "400px"}}
            src={img2}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{"height": "400px"}}
            src={img3}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    )
  }
}
