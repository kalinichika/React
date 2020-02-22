import React, { Component } from "react";
import Card from "../../../components/Card";
import "../../../style/css/grid.css";

export default class Main extends Component {
  render() {
    const cards = {
      main: {
        header: "V Kalinina V",
        image: {
          url: "images/vika.jpeg",
          name: "ViktoriyaKalinina"
        },
        text: "Привет! Я Вика!",
        options: "main"
      },
      common: [
        {
          header: "что люблю",
          image: {
            url: "images/nature1.jpeg"
          },
          text: "....",
          options: "common"
        },
        {
          header: "кого люблю",
          image: {
            url: "images/nature2.jpeg"
          },
          text: "....",
          options: "common"
        },
        {
          header: "к чему стремлюсь",
          image: {
            url: "images/nature3.jpeg"
          },
          text: "....",
          options: "common"
        },
        {
          header: "чем занимаюсь",
          image: {
            url: "images/nature4.jpeg"
          },
          text: "....",
          options: "common"
        }
      ]
    };
    const { main, common } = cards;
    return (
      <div className="page-main">
        <div className="grid-container">
          <Card
            key={main.index}
            header={main.header}
            image={main.image}
            text={main.text}
            options="main"
            className="grid-item grid-item--main"
          />
          {common.map(({ header, image, text }, index) => {
            return (
              <Card
                key={index}
                header={header}
                image={image}
                text={text}
                className={`grid-item grid-item--${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
