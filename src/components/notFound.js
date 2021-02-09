
import { Link } from "react-router-dom";

export const notFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h4 className="alert alert-danger"><span>404</span> NOT FOUND</h4>
        <Link className="btn btn-primary" to={'/'}>Go back Home</Link>
      </div>
    </div>
  )
}