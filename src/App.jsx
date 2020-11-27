import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar, Row, Col } from "react-onsenui";
import {notification} from 'onsenui';

import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, value: 0, op: "" };
    this.count = this.count.bind(this);
    this.delete = this.delete.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.multiplication = this.multiplication.bind(this);
    this.division = this.division.bind(this);
    this.wa = this.wa.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">電卓アプリ</div>
      </Toolbar>
    );
  }


//数字ボタンが押された時の関数
count(val) {
var s = this.state;
s.count = this.state.count * 10 + val;
this.setState(s);
}

//ACが押されたとき
delete(){
  this.setState({ count: 0, value: 0, op: "" });
}


plus() {
  var s =this.state;
  s.op= "+";
 
  s.value = this.state.count;
  s.count = 0;
  this.setState(s);
}

minus() {
  var s =this.state;
  s.op= "-";
 
  s.value = this.state.count;
  s.count = 0;
  this.setState(s);
}

multiplication() {
  var s =this.state;
  s.op= "×";
 
  s.value = this.state.count;
  s.count = 0;
  this.setState(s);
}

division() {
   var s =this.state;
  s.op= "÷";
 
  s.value = this.state.count;
  s.count = 0;
  this.setState(s);
}

wa() {
  var s =this.state;

  if(s.op ==  "+"){
     s.count = s.value + s.count;
    }

    if(s.op ==  "-"){
     s.count = s.value - s.count;
    }

    if(s.op ==  "×"){
     s.count = s.value * s.count;
    }

   if(s.op ==  "÷"){
     s.count = s.value / s.count;
    }

    s.op = "";

    this.setState(s);
}



  render() {
    return (
      <Page className="box14" renderToolbar={this.renderToolbar}>
      <Row>
          <Col className="box14"> {this.state.count}</Col>
      </Row>
        <Row>
          <Col className="box2" width="75%"></Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.delete()}>AC</Col>
        </Row>
        <Row>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(7)}>7</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(8)}>8</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(9)}>9</Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.division()}>÷</Col>
       </Row>
       <Row>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(4)}>4</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(5)}>5</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(6)}>6</Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.multiplication()}>×</Col>
        </Row>
        <Row>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(1)}>1</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(2)}>2</Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(3)}>3</Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.minus()}>-</Col>
        </Row>
        <Row>
          <Col className="box2" width="25%"></Col>
          <Col className="btn btn--pink btn--raised" onClick={() => this.count(0)}>0</Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.wa()}>=</Col>
          <Col className="btn btn--pink2 btn--raised" onClick={() => this.plus()}>+</Col>
       </Row>
      </Page>
    );
  }

}