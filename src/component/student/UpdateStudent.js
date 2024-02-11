import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const API_URL = "http://localhost:8080/api/v1/students";
  let navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`${API_URL}/${id}`, {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) setStudent(result.data);
  };

  
  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`${API_URL}/${id}`, student);

    navigate("/all-students");
  };

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  return (
    <section className="container col-md-4">
      <div className="card">
        <div className="card-header bg-primary">
          <h2 className="text-center text-light">Update Student</h2>
        </div>
        <div className="card-body">
          <form className="form-goup" onSubmit={(e) => updateStudent(e)}>
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

            <button className="btn btn-primary btn-block">Update</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateStudent;
