import { Link } from "react-router-dom"


function TodoCreate() {

    return( 
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div>
                <h4> Add New Task
                  <Link to="/todo/Create" className="btn btn-danger float-end">
                    Back
                  </Link>
                </h4>
                </div>
            </div>
            <div className="card-body">               
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TodoCreate;