

import { createRef, useState } from "react";
import { Navbar, Nav, Form, Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudents } from '../actions/index';



const Header = ({getStudents}) => {
  let [newStudent, setnewStudent] = useState({name: '', age: 0, phone: ''});
  let [errors, setErrors] = useState({})
  const [show, setShow] = useState(false);
  const handleModal = () => setShow(!show);
  const URL = "http://localhost:3100";
  const successMsg = createRef();
  
  // handle validation
  const handleValidation = () => {
    let valid = true;
    let errors = {};

    if (!newStudent["name"]) {
      valid = false;
      errors['name'] = 'Name cannot be empty!'
    }
    if (newStudent["age"] <= 0) {
      valid = false;
      errors['age'] = 'Age cannot be empty!'
    }
    if (!newStudent['phone'] || newStudent["phone"]) {
      if (!newStudent["phone"].match(/(01)[0-9]{9}/)) {
        valid = false;
        errors['phone'] = 'Please enter a correct phone number. ex: 01000000000'
      }
    }

    setErrors(errors)
    return valid;
  }

  const addStudent = () => {
    if (handleValidation()) {
      try {
        // console.log(newStudent);
        let requestOptions = {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newStudent)
        }
        
        fetch(`${URL}/Students`, requestOptions)
        .then((res)=> {
          res.json();
          getStudents();
        })
        .then((data) => console.log(data))
      } catch(err) {
        console.log(err);
      }
      setnewStudent({name: '', age: 0, phone: ''});
      successMsg.current.classList.remove('d-none')
      setTimeout(handleModal, 2000);
    }
  }

  return(
    <div>
      <Navbar style={{boxShadow: '0 0 8px rgba(0,0,0,0.1)'}} className="py-3" bg="white" variant="light">
        <div className="container">
          <Navbar.Brand as={NavLink} to='/home'>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} activeClassName="active" exact to='/'>Home</Nav.Link>
          </Nav>
          <Button onClick={()=> handleModal()} variant="info">Add Student</Button>
        </div>
      </Navbar>
      <br />

      <Modal show={show} onHide={handleModal}>
        <Modal.Body>
          <h3 className=" text-center">Add new student</h3>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name: </Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={newStudent["name"]}
               onChange={(e)=> setnewStudent({name: e.target.value, age: newStudent["age"], phone: newStudent["phone"]})} />
              <span style={{color: "red"}}>{errors['name']}</span>
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age: </Form.Label>
              <Form.Control type="number" placeholder="Enter age" value={newStudent["age"]}
               onChange={(e)=> setnewStudent({name: newStudent["name"], age: e.target.value, phone: newStudent["phone"]})} />
              <span style={{color: "red"}}>{errors['age']}</span>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone: </Form.Label>
              <Form.Control type="number" placeholder="Enter phone" value={newStudent["phone"]}
               onChange={(e)=> setnewStudent({name: newStudent["name"], age: newStudent["age"], phone: e.target.value})} />
              <span style={{color: "red"}}>{errors['phone']}</span>
            </Form.Group>

            <Button onClick={() => addStudent()} variant="primary" type="button">Add</Button>
            <Button className="ml-2" variant="dark" onClick={handleModal}>Close</Button>

            <div ref={successMsg} className="form-group success mt-4 d-none">
              <div className="alert alert-success">
                Student added successfully!
              </div>
            </div>
          </Form>
        </Modal.Body>
          
      </Modal>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getStudents}, dispatch);
}

export default connect(null, mapDispatchToProps)(Header)