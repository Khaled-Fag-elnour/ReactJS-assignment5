
import { Link } from "react-router-dom";

export const Student = ({student}) => {
  return(
    <div className="col-md-4">
      <Link to={`/students/${student.id}`} className="student-box">
        <span></span>
        <div className="content">
          <h3>{student.name}</h3>
        </div>
      </Link> 
    </div>
  )
}