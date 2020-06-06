import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: "",
      gender: "",
      favColor: "",
      age: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={this.handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={this.handleChange}
        />
        <br />

        <br />
        <lable>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </lable>
        <br />
        <lable>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </lable>
        <br />
        <br />
        <lable>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is Friendly?
        </lable>
        <br />
        <br />
        <label>Fav Color:</label>
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="">Select color:</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
        <br />
        <hr />
        <h2>The Information entered:</h2>
        <hr />
        <h2>
          Your name:{this.state.firstName} {this.state.lastName}{" "}
        </h2>
        <h2>your age: {this.state.age}</h2>
        <h2>your gender: {this.state.gender}</h2>
        <h2>your fav color : {this.state.favColor}</h2>
        <h2>
          is {this.state.firstName} {this.state.lastName} Friendly?{" "}
          {this.state.isFriendly ? "Yes" : "No"}
        </h2>
      </form>
    );
  }
}

export default Form;
