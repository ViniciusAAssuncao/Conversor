import React, { Component } from "react";
import "./Converter.css";

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinA: "",
      coinB: 0,
    };

    this.converter = this.converter.bind(this);
  }

  converter() {
    let fromto = `${this.props.coinA}_${this.props.coinB}`;
    let URL = `https://free.currconv.com/api/v7/convert?q=${fromto}&compact=ultra&apiKey=d0a4722f0d88ef5e9edf`;

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let quotation = json[fromto];
        let result = (parseFloat(this.state.coinA) * quotation).toFixed(2);
        this.setState({ result });
      });
  }

  render() {
    return (
      <div>
        <div className="content">
          <div className="card">
            <div className="topCard">
              <h2 className="title">
                {this.props.coinA} para {this.props.coinB}
              </h2>
            </div>
            <div className="centerCard">
              <input
                onChange={(event) => {
                  this.setState({ coinA: event.target.value });
                }}
                className="inputNumber"
                type="text"
                placeholder="Insira um valor a ser convertido aqui"
              />
              <button
                onClick={this.converter}
                className="inputButton"
                type="button"
              >
                Converter
              </button>
            </div>
            <div className="buttonCard">
              <span>Resultado da conversão</span>
              <span>R${this.state.result || 0}</span>
              <div>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
