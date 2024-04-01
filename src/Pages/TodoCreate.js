import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Load from '../components/Load.js';



function TodoCreate() {


  const Navigate = useNavigate();
  const [Load, setLoad] = useState(false);

  const [inputErrorList, setInputErrorList] = useState({});
  
  const [mytodo, setMytodo] = useState({
    title: "",
    description: "",
    status: ""
  })

  const handleInput = (e) => {
    e.persist();
    setMytodo({ ...mytodo, [e.target.name]: e.target.value });
  };

  const saveTodo = (e) => {
    e.preventDefault();
    setLoad= (true);

    const data = {
      title: mytodo.title,
      description: mytodo.description,
      status: mytodo.status,
    };

    axios.post("http://127.0.0.1:8000/api/todo",data)
      .then(res => {
        alert(res.data.message);
        Navigate('/todo')
        setLoad =(false);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
              setInputErrorList(error.response.data.errors)
              setLoad=(false);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
            setLoad=(false);
          }
        }
      });
  };

  if (Load) {
    return(
      <div>
    Loading.....Please Wait.
    </div>
    )
  }
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
                  <span className="text-danger">{inputErrorList && inputErrorList.title}</span>
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    value={todo.description}
                    onChange={handleInput}
                    name="description"
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList && inputErrorList.description}</span>
                </div>
                <div className="mb-3">
                  <label>Status</label>
                  <input
                    type="text"
                    name="status"
                    value={todo.status}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList && inputErrorList.status}</span>
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