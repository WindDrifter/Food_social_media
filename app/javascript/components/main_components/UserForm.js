import React from "react"
import PropTypes from "prop-types"
class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {first_name: '',
                  last_name: '',
                  email: '',
                  password: '',
                  password_confirmation: '',
                  username: ''
                };
    this.user = props.user;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.snakeCaseChanger = this.snakeCaseChanger.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
    if(this.state.password!==this.state.password_confirmation){
      console.log("password and its confirmation not match")
    }
  }
  handleSubmit(event){
    event.preventDefault();

    let send_data = this.state;
    fetch("/users", {
    method: "POST",
    body: JSON.stringify({user: send_data}),
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
  }
  snakeCaseChanger(name){
    return name.split(/_/g).map(word=> word.charAt(0).toUpperCase() + word.substr(1)).join(" ")
  }
  render () {
    return (
      <React.Fragment>
        <form className="userform">
          {Object.keys(this.state).map(state_name =>
          <label key={state_name} id={state_name+"_id"}>
            {this.snakeCaseChanger(state_name)}
            <input type={state_name.includes("password")? "password":"text"} key={state_name+"_field"}id={state_name+"_field_id"}name={state_name} onChange={this.handleChange} value={this.state.state_name}/>
          </label>
          )}
          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm
