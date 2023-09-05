import React from "react";

import './Footer1.css'

export default function Footer1 () {

    return(
        <div className="wrapper">
        <div className="icon facebook">
           <div className="tooltip"> Facebook </div>
           <span><i className="fab fa-facebook-f"></i></span>
        </div>
        <div className="icon twitter">
           <div className="tooltip">
              Twitter
           </div>
           <span><i className="fab fa-twitter"></i></span>
        </div>
        <div className="icon instagram">
           <div className="tooltip">
              Instagram
           </div>
           <span><i className="fab fa-instagram"></i></span>
        </div>
        <div className="icon github">
           <div className="tooltip">
              Github
           </div>
           <span><i className="fab fa-github"></i></span>
        </div>
        <div className="icon youtube">
           <div className="tooltip">
              YouTube
           </div>
           <span><i className="fab fa-youtube"></i></span>
        </div>
     </div>
    )
  
}
