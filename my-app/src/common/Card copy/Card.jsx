import React, { Component } from "react";
import Image from '../../components/Image';
import '../../style/css/card.css'

export default class Card extends Component {
  render() {
    const { header, image, text, options } = this.props;
    return (
      <div className={`card-box card-box--${options}`}>
        <div className="card-box__header">{header}</div>
        <Image className="card-box__image" {...image} options={options}/>
        <div className="card-box__text">{text}</div>
      </div>
    );
  }
}
