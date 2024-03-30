import { Link } from "react-router-dom";



function Todo(){

return (
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4>Todo List
                        <Link to="/"> Add New Task</Link>
                    </h4>
                </div>
            </div>
        </div>
    </div>
<h1>This is Todo Page</h1>
</div>
)
}
export default Todo;