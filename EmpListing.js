import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {
  const [empdata, setEmpData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/employee");
        const data = await response.json();
        setEmpData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h3>Employee Listing</h3>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered" id="table">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">Remove</button>
                      <button className="btn btn-primary">Details</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
