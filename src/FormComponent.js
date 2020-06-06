import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="first name"
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="last name"
          onChange={props.handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          value={props.data.age}
          name="age"
          placeholder="age"
          onChange={props.handleChange}
        />
        <br />

        <br />
        <lable>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </lable>
        <br />
        <lable>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </lable>
        <br />
        <br />
        <lable>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.data.isFriendly}
            onChange={props.handleChange}
          />
          Is Friendly?
        </lable>
        <br />
        <br />
        <label>Fav Color:</label>
        <select
          value={props.data.favColor}
          name="favColor"
          onChange={props.handleChange}
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
          Your name:{props.data.firstName} {props.data.lastName}{" "}
        </h2>
        <h2>your age: {props.data.age}</h2>
        <h2>your gender: {props.data.gender}</h2>
        <h2>your fav color : {props.data.favColor}</h2>
        <h2>
          is {props.data.firstName} {props.data.lastName} Friendly?{" "}
          {props.data.isFriendly ? "Yes" : "No"}
        </h2>
      </form>
    </main>
  );
}

export default FormComponent;
