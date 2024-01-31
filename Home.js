import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
<div style={{ backgroundColor: "aqua" }}>
     <p>Welcome to Staff Solutions Simplified. Our web app seeks to meet the needs of staffing and
        management with ease no matter your company's size. As keeping track of company 
        personnel may sometimes become hectic, Staff Solutions Simplified is here to save the day.</p> 
      
      <Link to="/" className="btn btn-danger">Take Me To The App</Link>

    </div>
  )
}

export default Home
