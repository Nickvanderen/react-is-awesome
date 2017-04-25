import React , { Component } from 'react';
import './App.css';
import $ from 'jquery';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
    };
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  sendRegistration(e) {
    e.preventDefault();
    var userName = JSON.stringify(this.state.name)
    var userPassword = JSON.stringify(this.state.password)
    console.log(this.state.name)
    console.log(this.state.password)
    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: {
        user: { name: userName,
                password: userPassword,
                is_admin: false
        }
      },
      crossDomain: true,
      xhrFields: { withCredentials: true },
    }).done(function(response) {
      console.log(response);
    })
    // $.ajax({
    //   url: "BLANK",
    //   method: 'POST',
    //   data:
    // })
  }

  render() {
    return (
      <div>
        <form className="reggieform" onSubmit={(e) => this.sendRegistration(e)}>
          <input type="text" name="name" placeholder="name here" onChange={this.handleNameChange.bind(this)} />
          <input type="password" name="password" placeholder="password here" onChange={this.handlePasswordChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default RegistrationForm;
