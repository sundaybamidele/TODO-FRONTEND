import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pageloading from "../components/Pageloading";

function TodoCreate() {


  const Navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
    setLoading(true)
    

    const data = {
      title: mytodo.title,
      description: mytodo.description,
      status: mytodo.status,
    }

    axios.post("http://127.0.0.1:8000/api/todo",data)
      .then(res => {
        alert(res.data.message);
        Navigate('/todo')
        setLoading(false)
      })
      .catch(function (error) {

        if (error.response) {

          if (error.response.status === 422) {
              setInputErrorList(error.response.data.message)
              setLoading(false)
          }
          if (error.response.status === 500) {
            alert(error.response.data);
            setLoading(false)
          }
          
          if (error.response.status === 409) {
            alert(error.response.data.message);
            setLoading(false)
          }
        }
      });
  };

  if (loading) {
    return(
      <Pageloading/>
    )
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div>
                <h4 data-testid3="Add New Task">Add New Task</h4>
                  <Link to="/todo" className="btn btn-danger float-end">
                    <h4>Back</h4>
                  </Link>
              </div>
            </div>
            <div className="card-body">

              <form onSubmit={saveTodo}>
                <div className="mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={mytodo.title}
                    onChange={handleInput}
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList && inputErrorList.title}</span>
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    value={mytodo.description}
                    onChange={handleInput}
                    name="description"
                    className="form-control"
                  />
                  <span className="text-danger">{inputErrorList && inputErrorList.description}</span>
                </div>
                <div className="mb-3">
                  <label>Status(1 for ongoing and 0 for complete task)</label>
                  <input
                    type="text"
                    name="status"
                    value={mytodo.status}
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