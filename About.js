import React from 'react';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div style={{ backgroundColor: "aqua" }} >
      <p>Our mission at Staff Solutions Simplified is to revlutionize and improve 
        the way in which company staffing needs are handled and met. Our web application 
        serves as a simple and effective way to create, update, and remove staff information 
        as needed. No matter a company's staffing size, we have you covered. For additional 
        information contact us at (123) 456-7890 or send an email to
         <b> ssolutions@test.com</b>.</p>

         <Link to="/" className="btn btn-danger">Take Me To The App</Link>

    </div>
  )
}

export default About
