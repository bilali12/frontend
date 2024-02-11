import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const API_URL = "http://localhost:8080/api/v1/students";
  const [student, setStudent] = useState([]);
  const {id} = useParams();
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

  console.log(student);
  return (
    <section className="container mt-5">
      <div className="card col-md-6 mx-auto">
        <div className="card-body text-center">
          <h3 className="card-title mb-4">Student Profile</h3>
          <div className="row mb-3">
            <div className="col">First Name:</div>
            <div className="col">{student.firstName}</div>
          </div>
          <div className="row mb-3">
            <div className="col">Last Name:</div>
            <div className="col">{student.lastName}</div>
          </div>
          <div className="row mb-3">
            <div className="col">Email:</div>
            <div className="col">{student.email}</div>
          </div>
          <div className="row mb-3">
            <div className="col">Department:</div>
            <div className="col">{student.department}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
