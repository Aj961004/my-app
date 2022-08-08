import React from "react";
import './meong.css';

function KartuMeong () {
    return (
        <div className="cardku">
            <div className="image">
              <img className="img-data"
              src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/18/22/18-22-101P/Sneaky-Cat-Laura-Graves-Poster.jpg"
              alt="backgroundnya"
              />
            </div>
            <div className="details">
              <div className="center">
                <h1>Arviena Jasmine</h1>
                <span>Trainee Engineer</span>
                <p>One and Only :D</p>
                <ul>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            </div>
    )
}

export default KartuMeong;