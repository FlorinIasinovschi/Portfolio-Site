import React from "react";
import './form.scss';

let initialState = {
  name: '',
  email: '',
  message: '',
  emailError: '',
  nameError: '',
  messageError: ''
}
export default class Form extends React.Component {

  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name);
  }

  validate = () => {
    let emailError = '';
    let nameError = '';
    let messageError = '';
    if (!this.state.email.includes('@')) {
      emailError = "Email is invalid";
    }
    if (!this.state.name) {
      nameError = "Type your name :)";
    }
    if (!this.state.message) {
      messageError = "Type a message";
    }
    if (emailError || nameError || messageError) {
      this.setState({ emailError, nameError, messageError });
      return false;
    }
    return true;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }

  }
  render() {
    return (
      <div>
        <form class="contact-form" onSubmit={this.handleSubmit}>
          <div className="wrapper">
            <div className="name">
              <h3>Name</h3>
              <input name='name' value={this.state.name} onChange={this.handleChange} />
              <h4 >{this.state.nameError}</h4>

            </div>
            <div className="email">
              <h3>Email</h3>
              <input name='email' value={this.state.email} onChange={this.handleChange} />
              <h4 >{this.state.emailError}</h4>

            </div>
            <div className="message">
              <h3>Message</h3>
              <textarea rows="8" name='message' value={this.state.message} onChange={this.handleChange} />
              <h4 >{this.state.messageError}</h4>

            </div>
            <div className="btn">
              <button type="submit">Send</button>

            </div>

          </div>
        </form>
      </div>
    )
  }




}