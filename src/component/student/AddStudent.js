import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const API_URL = "http://localhost:8080/api/v1/students";
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, student);
    setStudent({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });

    navigate("/all-students");
  };

  return (
    <section className="container col-md-4">
      <div className="card">
        <div className="card-header bg-primary">
          <h2 className="text-center text-light">New Student</h2>
        </div>
        <div className="card-body">
          <form className="form-goup" onSubmit={(e) => saveStudent(e)}>
            <label className="input-group-text" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={firstName}
              required
              autoFocus
              onChange={(e) => handleInputChange(e)}
            />

            <label className="input-group-text" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={lastName}
              required
              onChange={(e) => handleInputChange(e)}
            />

            <label className="input-group-text" htmlFor="email">
              Email
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => handleInputChange(e)}
            />

            <label className="input-group-text" htmlFor="department">
              Department
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="department"
              id="department"
              placeholder="Enter department"
              value={department}
              required
              onChange={(e) => handleInputChange(e)}
            />

            <button className="btn btn-primary btn-block">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
