import React from "react";
import Header from "../components/Layout/Header.js";


const About = () => {
  return (
      <div>
      <Header/>

      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            className="banner-img"
            alt="banner"
            height = "600px"      
          />
        </div>
        </div>
        </div>
        
    
  );
};


export default About;