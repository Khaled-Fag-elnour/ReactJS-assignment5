

import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudentDetails, clearStudentDetails } from "../actions/index";
import Header from '../components/header'

const StudentDetails = ({getStudentDetails, clearStudentDetails, match, studentDetails}) => {

  useEffect(() => {
    // debugger;
    getStudentDetails(match.params.id)
    return () => {
      clearStudentDetails();
    }
  }, [])

  const renderStudent = () => {
    if (studentDetails) {
      return(
        <div className="student-details">
          <h3>Name: {studentDetails.name}</h3>
          <h5>Age: {studentDetails.age}</h5>
          <h5>Phone: {studentDetails.phone}</h5>
        </div>
      )
    } else {
      return <h3>No Information available</h3>
    }
  }

  // start render function
  return(
    <div className="student-details-sec">
      <Header/>
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            {renderStudent()}
          </div>
        </div>
      </div>
    </div>
  )
  // end render function
}

const mapStateToProps = (state) => {
  return {
    studentDetails: state.students.details
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getStudentDetails, clearStudentDetails}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)