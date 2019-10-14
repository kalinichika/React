import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  submit = () => {
    console.log("submit", this.testInput.value);
  };
  render() {
    return (
      <div className='form'>
        <input type="text" placeholder="test" className="field" ref={(input) => this.testInput=input} />
        <button onClick={this.submit.bind(this)} className="submitButton">
          Submit
        </button>
      </div>
    );
  }
}
export default Form;
