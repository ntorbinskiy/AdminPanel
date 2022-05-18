import React from "react";
import "./CreatingUser.css";
import { SetItem} from "../../service/setData";
import { Component } from "react";
class CreatingUser extends Component {

    state = {
        email: "",
        password:""
    }
     getInputEmail = (event)=>{
        const userValue = event.target.value;
        this.setState({
            email: userValue
        });        
    };
     getInputPass = (event)=>{
        const userValue = event.target.value;
        this.setState({
            password: userValue
        });
    };

  render() {
      const {email, password} = this.state;
    return (
        <div className="creatingUser">
          <form className="form" action={SetItem(email, password)} >
            {/* <input className="input"  placeholder="name"></input> */}
            <input className="input" type="email"  onChange={this.getInputEmail} placeholder="email"></input>
            <input className="input" type="password" onChange={this.getInputPass} placeholder="password"></input>
            <button className="submit" value="Submit" type="submit">Submit</button>
          </form>
    
          <a href="##" className="viewAllUsers">
            View All Users
          </a>
        </div>
      );
  }
};

export default CreatingUser;
