import React, { Component } from "react";
import Image from "../Image";
import "../../style/css/card.css";

export default class Card extends Component {
  render() {
    const { header, image, text, options, className } = this.props;
    const optionsClass = options ? `card-box--${options}` : "";
    return (
      <div className={`${className} card-box ${optionsClass}`}>
        <div className="card-box__header">{header}</div>
        <Image className="card-box__image" {...image} />
        <div className="card-box__text">{text}</div>
      </div>
    );
  }
}
