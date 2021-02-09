import Header from "./header"
import { Search } from "../containers/search";
import StudentsList from "../containers/students-List";
import { Component } from "react";
import { getStudents } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      filteredStudents: [],
      studentsList: []
    }
  }

  componentDidMount() {
    // initializes filtered list after action dispatch
    this.props.getStudents().then(()=> {
      this.setState({filteredStudents: this.props.studentsList})
    })
  }

  componentDidUpdate() {
    // re-filtering the list on new props
    if (this.props.studentsList !== this.state.studentsList) {
      this.setState({studentsList: this.props.studentsList})
      this.filterList('')
    } 
  }

  filterList = (name) => {
    this.setState((state) => {
      state.filteredStudents = this.props.studentsList.filter((student) => {
        return student.name.toLowerCase().includes(name.toLowerCase())
      })
      return state;
    })
  }

  
  render = () => {
    return (
      <div className="home">
        <Header/>
        <Search onNameChange={this.filterList} />
        <StudentsList studentsList={this.state.filteredStudents} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studentsList: state.students.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);