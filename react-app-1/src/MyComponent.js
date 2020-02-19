import React, { Component } from "react";
import { connect } from 'react-redux';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




class MyComponent extends Component {
  state = {
    //shade: state.muiTheme.shade,
  };
  handleValueChange = value => this.props.onUpdateValue({ value });
  render() {
    const { shade } = this.props;
    const myOptions = {
      mode: 'xml',
      theme: shade === 'dark' ? 'material' : 'default',
      lineNumbers: true,
    }
    return (
      <CodeMirror
        id="editor"
        value={this.props.value}
        options={myOptions}
        onBeforeChange={(editor, data, value) => {
          this.handleValueChange(value);
        }}
        onChange={(editor, data, value) => { }}
      />
    );
  }
}

export default MyComponent;