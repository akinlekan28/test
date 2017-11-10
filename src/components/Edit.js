import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  componentDidMount() {
    axios.get('/api/student/'+this.props.match.params.id)
      .then(res => {
        this.setState({ student: res.data });
        console.log(this.state.student);
      });
  }

  onChange = (e) => {
    const state = this.state.student
    state[e.target.name] = e.target.value;
    this.setState({student:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, matricno, department, level, tel, email, address, dob } = this.state.student;

    axios.put('/api/student/'+this.props.match.params.id, { firstname, lastname, matricno, department, level, tel, email, address, dob })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              EDIT STUDENT
            </h3>
          </div>
          <div class="panel-body col-md-7">
            <h4><Link to={`/show/${this.state.student._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Student BioData</Link></h4>
            <form onSubmit={this.onSubmit}>

              <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" class="form-control" name="firstname" value={this.state.student.firstname} onChange={this.onChange} placeholder="First Name" />
              </div>

              <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" class="form-control" name="lastname" value={this.state.student.lastname} onChange={this.onChange} placeholder="Last Name" />
              </div>

              <div class="form-group">
                <label for="matricno">Matric Number:</label>
                <input type="number" class="form-control" name="matricno" value={this.state.student.matricno} onChange={this.onChange} placeholder="Matric Number" />
              </div>

               <div class="form-group">
                <label for="department">Department:</label>
                <input type="text" class="form-control" name="department" value={this.state.student.department} onChange={this.onChange} placeholder="Department" />
              </div>

               <div class="form-group">
                <label for="level">Level:</label>
                <input type="text" class="form-control" name="level" value={this.state.student.level} onChange={this.onChange} placeholder="Level" />
              </div>

              <div class="form-group">
                <label for="tel">Phone Number:</label>
                <input type="number" class="form-control" name="tel" value={this.state.student.tel} onChange={this.onChange} placeholder="Phone Number" />
              </div>

              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.student.email} onChange={this.onChange} placeholder="Email" />
              </div>

              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={this.state.student.address} onChange={this.onChange} placeholder="Address" />
              </div>

              <div class="form-group">
                <label for="dob">Date Of Birth:</label>
                <input type="date" class="form-control" name="dob" value={this.state.student.dob} onChange={this.onChange} placeholder="dob" />
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;