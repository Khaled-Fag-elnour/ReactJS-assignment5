

const URL = "http://localhost:3100";

export const getStudents = async () => {
  let payload;
  try {
    let res = await fetch(`${URL}/Students`, {method: 'get'});
    payload = await res.json();
  } catch(err) {
    console.log(err);
  }
  return {
    type: 'STUDENTS_LIST',
    payload
  }
}

export const getStudentDetails = async (id) => {
  let payload;
  try {
    let res = await fetch(`${URL}/Students/${id}`, {method: 'get'});
    payload = await res.json();
  } catch(err) {
    console.log(err);
  }
  
  return {
    type: 'STUDENT_DETAILS',
    payload
  }
}

export const clearStudentDetails = () => {  
  return {
    type: 'CLEAR_STUDENT_DETAILS',
    payload: null
  }
}













/*
  import Header from "./header"
import { Search } from "../containers/search";
import StudentsList from "../containers/students-List";
import { Component } from "react";
import { getStudents } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Student } from "../components/student";


class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      filteredStudents: []
    }
  }

  componentDidMount() {
    this.props.getStudents();
    this.setState({filteredStudents: this.props.studentsList})
  }

  renderFiltered(filteredStudents) {
    if (filteredStudents) {
      return filteredStudents.map((student) => {
        return (
          <Student student={student} key={student.id}/>
        ) 
      })
    } else {
      return <h3>No Students available</h3>
    }
  }
  
  render = () => {
    return (
      <div onClick={()=> console.log(this.props.studentsList, this.state.filteredStudents)}>
        <Header/>
        <Search/>
        {this.renderFiltered(this.state.filteredStudents)}
        <StudentsList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    studentsList: state.students.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
*/