import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      matricno: '',
      department: '',
      level: '',
      tel: '',
      email: '',
      address: '',
      dob: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, matricno, department, level, tel, email, address, dob } = this.state;

    axios.post('/api/student', { firstname, lastname, matricno, department, level, tel, email, address, dob })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { firstname, lastname, matricno, department, level, tel, email, address, dob } = this.state;
    return (
      <div class="container">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              ADD STUDENT
            </h3>
          </div>
          <div class="panel-body col-md-7">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Student List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" class="form-control" name="firstname" value={firstname} onChange={this.onChange} placeholder="First Name" />
              </div>

              <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" class="form-control" name="lastname" value={lastname} onChange={this.onChange} placeholder="Last Name" />
              </div>

              <div class="form-group">
                <label for="matricno">Matric Number:</label>
                <input type="number" class="form-control" name="matricno" value={matricno} onChange={this.onChange} placeholder="Matric Number" />
              </div>

               <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" class="form-control" name="department" value={department} onChange={this.onChange} placeholder="Department" />
              </div>

               <div class="form-group">
                <label for="level">Level:</label>
                <input type="text" class="form-control" name="level" value={level} onChange={this.onChange} placeholder="Level" />
              </div>

              <div class="form-group">
                <label for="tel">Phone Number:</label>
                <input type="number" class="form-control" name="tel" value={tel} onChange={this.onChange} placeholder="Phone Number" />
              </div>

              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>

              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>

              <div class="form-group">
                <label for="dob">Date Of Birth:</label>
                <input type="date" class="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="dob" />
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;