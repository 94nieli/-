import React ,{ Component } from 'react';
import {Col,Button} from 'antd';
import './style.css'
import Judge from '../judge/judge'
import Personinfo from '../person/personinfo';
class Provider extends Component{
  render(){
    return(
      <div>
        <div style={{margin:"20px"}}>
          <span className="header">供应商总数为：456</span>
          <Button type="primary" onClick={()=>alert(1)} style={{margin:" 0 20px"}}>新建供应商</Button>

        </div>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={1} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={0} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={3} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={4} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={1} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={0} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={3} /></div></Col>
        <Col className="gutterRow" span={4}><div className="center Providerborder"><Personinfo /> <Judge rate={4} /></div></Col>

      </div>
    )
  }
}
export default Provider;
