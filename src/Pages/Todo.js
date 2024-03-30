import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function Todo(){    

useEffect(() => {
    axios.get('http://localhost:8080/api/todos').then((response) => {
        console.log(response);
   
       
    });

   
}, []);

return (
<div className="container mt-5">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4>Todo List
                        <Link to="/" className="btn btn-primary float-end"> Add New Task</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped" border={10} bgcolor="#f1f1f1">
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

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
<h1>This is Todo Page</h1>
</div>
)
}

export default Todo;