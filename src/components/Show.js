import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/student/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">
              {this.state.student.firstname} {this.state.student.lastname} Bio Data
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>All Student</Link></h4>
            <br/>
            <dl>
              <dt>Department:</dt>
              <dd>{this.state.student.department}</dd>
              <dt>Matric Number:</dt>
              <dd>{this.state.student.matricno}</dd>
              <dt>Level:</dt>
              <dd>{this.state.student.level}</dd>
              <dt>Email:</dt>
              <dd>{this.state.student.email}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.student.tel}</dd>
              <dt>Address:</dt>
              <dd>{this.state.student.address}</dd>
              <dt>Date Of Birth:</dt>
              <dd>{this.state.student.dob}</dd>
              <dt>Date Added:</dt>
              <dd>{this.state.student.added_date}</dd>
            </dl>
            <Link to={`/edit/${this.state.student._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.student._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;