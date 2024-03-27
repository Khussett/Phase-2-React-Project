import React from 'react';
import  {Link}  from 'react-router-dom';

const Home = () => {
    return (
        <div className="divbtn">
            <Link to="/employee/about" className="btn btn-success">About</Link>
            <div style={{ backgroundColor: 'navy', color: 'white', padding: '10px' }}>
                <h3 style={{ padding: '10px' }}>
                    We at Staffing Solutions make it our mission to revolutionize human resources management to a maximum.
                </h3>
            </div>
        </div>
    );
}

export default Home;
