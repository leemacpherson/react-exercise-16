import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(".... the event.target is ", event.target);
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            female
          </label>
          <br />
          <br />
          <label>Choose your destination</label>
          <br />
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">--please make a selection---</option>
            <option value="London">London</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Edinburgh">Edinburgh</option>
          </select>
          <br />
          <br />
          <label>Dietary restrictions</label>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.handleChange}
            />
            Vegan
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.isKosher}
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.isVegan ? <p>...Vegan</p> : null}
          {this.state.isKosher ? <p>...Kosher</p> : null}
          {this.state.isLactoseFree ? <p>...Lactose free</p> : null}
        </p>
      </main>
    );
  }
}

export default App;
