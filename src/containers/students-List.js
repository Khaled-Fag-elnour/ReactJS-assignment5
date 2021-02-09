

// import { getStudents } from "../actions";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { useEffect } from "react";
import { Student } from "../components/student";

const StudentsList = (props) => {

  // useEffect(() => {
  //   props.getStudents();
  // }, [])

  const renderStudents = () => {
    if (props.studentsList.length > 0) {
      return props.studentsList.map((student) => {
        return (
          <Student student={student} key={student.id}/>
        ) 
      })
    } else {
      return <h3 className="text-white pb-3">No Students available</h3>
    }
  }

  return(
    <div className="students-list">
      <div className="container pt-4">
        <div className="row">
          {renderStudents()}
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     studentsList: state.students.list
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ getStudents }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
export default StudentsList;