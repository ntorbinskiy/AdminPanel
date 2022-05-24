import React from "react";
import "./CreatingUser.css";
import { SetItem } from "../../service/setData";
import { Component } from "react";
import { Link } from "react-router-dom";
class CreatingUser extends Component {
  state = {
    email: "",
    password: "",
  };
  getInputEmail = (event) => {
    const userValue = event.target.value;
    const copyUserVaue = userValue.slice(-4);
    if (copyUserVaue === ".com") {
      this.setState({
        email: userValue,
      });
    }
  };

  getInputPass = (event) => {
    const userValue = event.target.value;
    if (userValue.length >= 8) {
      this.setState({
        password: userValue,
      });
    }
    console.log("pass was recieved");
  };
  onSubmit = () => {
    const { email, password } = this.state;
    SetItem(email, password);
  };
  render() {
    return (
      <div className="creatingUser">
        <form className="form" onSubmit={this.onSubmit}>
          {/* <input className="input"  placeholder="name"></input> */}
          <input
            className="input"
            type="email"
            onChange={this.getInputEmail}
            placeholder="email"
          ></input>
          <input
            className="input"
            type="password"
            onChange={this.getInputPass}
            placeholder="password"
          ></input>
          <button className="submit" value="Submit" type="submit">
            Submit
          </button>
        </form>
        <Link to="/allusers">View All Users</Link>
      </div>
    );
  }
}

export default CreatingUser;
