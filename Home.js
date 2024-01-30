import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
<div style={{ backgroundColor: "aqua" }}>
     <h5>Welcome to Staff Solutions. Our web app seeks to meet the needs of staffing and
        management with ease no matter your company's size. 
      </h5>
      <Link to="/" className="btn btn-danger">Take Me To The App</Link>

    </div>
  )
}

export default Home
