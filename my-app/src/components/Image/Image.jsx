import React, { Component } from "react";
import "../../style/css/image.css";

export default class Image extends Component {
  render() {
    const { url, name="", className } = this.props;
    return (
      <div className={`${className} image-container`}>
        <img src={url} alt={name} />
      </div>
    );
  }
}
