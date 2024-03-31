import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import Load from "../components/Load";

function Todo() {
  const [Load, setLoad] = useState(true);
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/todo").then((res) => {
      console.log(res);
      setTodo(res.data.todos);
      setLoad(false);
    });
  }, []);

  
  if (Load) {
    return(
      <div>
    Loading.....Please Wait.
    </div>
    )
  }
  
  var todoDetails = "";
  todoDetails = todos.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.status}</td>
        <td>
          <Link to={`/todo/${item.id}`} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Todo List
                <Link to="/" className="btn btn-primary float-end">
                  Add New Task
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped" border={3}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{todoDetails}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1>This is Todo Page</h1>
    </div>
  );
}

export default Todo;
