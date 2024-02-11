import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  const API_URL = "http://localhost:8080/api/v1/students";

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(API_URL, {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) setStudents(result.data);
  };

  const deleteStudent = async (id) =>  {
      await axios.delete(`${API_URL}/${id}`);
      loadStudents();
  }
  return (
    <section className="container">
      <div className="card">
        <div className="card-header bg-dark">
          <h2 className="text-center text-light">All Students</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {students.map((student, index) => {
                return (
                  <tr key={student.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td className="mx-2">
                      <Link
                        className="btn btn-info"
                        to={`/view-student/${student.id}`}
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                    </td>
                    <td className="mx-2">
                      <Link
                        className="btn btn-warning"
                        to={`/update-student/${student.id}`}
                      >
                        <i className="bi bi-pencil"></i>
                      </Link>
                    </td>
                    <td className="mx-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteStudent(student.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentsView;
