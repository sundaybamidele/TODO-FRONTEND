import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import Pageloading from "../components/Pageloading";

function TodoEdit() {

  let {id} = useParams();

  const [loading, setLoading] = useState(true);

  const [inputErrorList, setInputErrorList] = useState({});
  
  const [mytodo, setMytodo] = useState({})

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/todo/${id}/edit`).then((res) => {
      console.log(res);
      setMytodo(res.data.todo);

      setLoading(false);

    })
    .catch(function (error) {

      if (error.response) {

        if (error.response.status === 404) {
          alert(error.response.data.message);
          setLoading(false)
      }
        if (error.response.status === 500) {
          alert(error.response.data);
          setLoading(false)
        }
      }
    });
  }, [id]);



  const handleInput = (e) => {
    e.persist();
    setMytodo({ ...mytodo, [e.target.name]: e.target.value });
  };

  const updateTodo = (e) => {
    e.preventDefault();
    
    setLoading(true)
    

    const data = {
      title: mytodo.title,
      description: mytodo.description,
      status: mytodo.status,
    }

    axios.put(`http://127.0.0.1:8000/api/todo/${id}/edit`,data)
      .then(res => {
        alert(res.data.message);
        setLoading(false)
      })
      .catch(function (error) {

        if (error.response) {

          if (error.response.status === 422) {
              setInputErrorList(error.response.data.message)
              setLoading(false)
          }
          if (error.response.status === 404) {
            alert(error.response.data.message);
            setLoading(false)
        }
          if (error.response.status === 500) {
            alert(error.response.data);
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
                <h4>
                  Edit Task
                  <Link to="/todo" className="btn btn-danger float-end">
                    Back
                  </Link>
                </h4>
              </div>
            </div>
            <div className="card-body">

              <form onSubmit={updateTodo}>
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
                  <label>Status</label>
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
                  <button className="btn btn-primary">Update Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoEdit;