import React, { Component } from 'react';
import './Course.css';

class Course extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Course">
        <h1>{this.props.match.params.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
