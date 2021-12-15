import React from "react";
import './form.scss';
export default class Form extends React.Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form class="contact-form" onSubmit={this.handleSubmit}>
          <div className="wrapper">
            <div className="name">
              <h3>Name</h3>
              <input name='name' value={this.state.name} onChange={this.handleChange} />

            </div>
            <div className="email">
              <h3>Email</h3>
              <input name='email' value={this.state.email} onChange={this.handleChange} />

            </div>
            <div className="message">
              <h3>Message</h3>
              <textarea rows="8" name='message' value={this.state.message} onChange={this.handleChange} />

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