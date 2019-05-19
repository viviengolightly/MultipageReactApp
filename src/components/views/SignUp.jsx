import React, { Component } from "react";

import Header from '../Header';
import NavigationBar from '../NavigationBar';

import Styles from '../../styles/signup.css';

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state  = {
      firstname: '',
      surname: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handelSubmit(event) {
    alert(`A user: ${this.state.firstname} has been signed up.`);
    event.preventDefault();
  }

  render() {
    return (
      <div id="signup">
        <Header />
        <form className={Styles.form} onSubmit={this.handelSubmit}>
          <label className={Styles.lbl}>
            First Name:
          </label>
          <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
          
          <label className={Styles.lbl}>
            Surname:
          </label>
          <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
          
          <label className={Styles.lbl}>
            Email:
          </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          
          <input className={Styles.signBtn} type="submit" value="Submit" />
        </form>
        <NavigationBar />
      </div>
    );
  }
}