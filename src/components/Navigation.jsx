import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  state = {}

  render() {
    return (
      <div>
        <Link to="form">Link 1</Link>
        <Link to="all">Link 2</Link>
      </div>
    );
  }
}
