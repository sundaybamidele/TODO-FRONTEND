import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function TodoCreate() {
  const [inputErrorList, setInputErrorList] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "",
  });

  const handleInput = (e) => {
    e.persist();
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const saveTodo = (e) => {
    e.preventDefault();

    const data = {
      title: todo.title,
      description: todo.description,
      status: todo.status,
    };

    axios
      .post("http://127.0.0.1:8000/api/todo", data)
      .then((res) => {
        alert(res.data.message);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div>
                <h4>
                  Add New Task
                  <Link to="/todo" className="btn btn-danger float-end">
                    Back
                  </Link>
                </h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={saveTodo}>
                <div className="mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.title}</span>
                </div>
                <div>
                  <label>Description</label>
                  <input
                    type="text"
                    value={todo.description}
                    onChange={handleInput}
                    name="description"
                    className="form-control"
                  />
                  <span className="text-danger">
                    {inputErrorList.description}
                  </span>
                </div>
                <div>
                  <label>Status</label>
                  <input
                    type="text"
                    name="status"
                    value={todo.status}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList.status}</span>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary">Submit Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
