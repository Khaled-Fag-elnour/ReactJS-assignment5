

import { Form } from "react-bootstrap";
import { useState } from "react";

export const Search = (props) => {

  let [name, setName] = useState('');

  const handleChange = (e) => {
    props.onNameChange(e.target.value);
    setName(e.target.value);
  }

  return(
    <section className="search">
      <div className="container">
        <div className="row align-items-center flex-column">
          <h3 className="text-white">Search for students</h3>
          <div className="col-md-6">
            <Form>
              <Form.Group controlId="name">
                <Form.Control value={name} onChange={handleChange} type="text" placeholder="Search by name"/>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}