import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pageloading from "../components/Pageloading";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/todo")
      .then((res) => {
        console.log(res);
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  const deleteTodo = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this record?");
    if (!confirmed) return; // Cancel deletion if user cancels the confirmation

    axios.delete(`http://127.0.0.1:8000/api/todo/${id}/delete`)
      .then((res) => {
        alert(res.data.message);
        // Filter out the deleted todo item from the todos array
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
          } else if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      });
  };

  if (loading) {
    return <Pageloading />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Todo List
                <Link to="/todo/Create" className="btn btn-primary float-end">
                  Add New Task
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
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
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={index}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>{todo.status}</td>
                      <td>
                        <Link to={`/todo/${todo.id}/edit`} className="btn btn-success">
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
