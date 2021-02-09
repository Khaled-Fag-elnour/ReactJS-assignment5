

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import StudentDetails from "./containers/student-Details";
import { notFound } from './components/notFound';


const App = () => {
  return(
    <nav>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/students/:id' component={StudentDetails} />
          <Route path='**' component={notFound} />
        </Switch>
      </Router>
    </nav>
  )
}

/*
  home
  search
  studentsList
  studentDetails
  student
  notFound
*/

export default App;
