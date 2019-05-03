import React, { Component } from "react";
import "./form.css";
import api from "./api";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    optIn: true
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    return api.addUser(this.state.name, this.state.email, this.state.number);
  };
  handlePromotionClick = e => {
    this.setState(prevState => ({ optIn: !prevState.optIn }));
  };

  render() {
    return (
      <form data-test="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input
          data-test="name"
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Name"
          value={this.state.name}
        />
        <input
          data-test="email"
          type="text"
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
          value={this.state.email}
        />
        <input
          data-test="number"
          type="text"
          name="number"
          onChange={this.handleChange}
          placeholder="Number"
          value={this.state.number}
        />
        <div>
          <input
            data-test="checked"
            type="checkbox"
            checked={this.state.optIn}
            onChange={() => {}}
            onClick={this.handlePromotionClick}
          />
          <p data-test="promotionsP" className="promotions">
            Receive Promotions
          </p>
        </div>
        <button type="submit" data-test="submitButton">
          Submit
        </button>
      </form>
    );
  }
}
