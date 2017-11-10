import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('/api/student')
      .then(res => {
        this.setState({ students: res.data });
        console.log(this.state.students);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              STUDENT DETAILS
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Student BioData</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Matric No</th>
                  <th>Department</th>
                  <th>Level</th>
                  <th>Tel</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>DOB</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map(student =>
                  <tr>
                    <td><Link to={`/show/${student._id}`}>{student.firstname} {student.lastname}</Link></td>
                    <td>{student.matricno}</td>
                    <td>{student.department}</td>
                    <td>{student.level}</td>
                    <td>{student.tel}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>{student.dob}</td>
                    <td>{student.added_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;