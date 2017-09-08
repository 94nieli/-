import React ,{ Component } from 'react';
import {Button,Input} from 'antd';

class Action extends Component{


  render(){
    return(
      <div style={{width:"20%",height:"80%",float:"right"}}>
          <Input placeholder="/万元" style={{width:"40%"}} onBlur={(e)=>{this.props.getnew(e.target.value)}}/>  <Button type="primary" style={{marginLeft:20}} onClick={this.props.createnew}>新增营业额</Button>
      </div>
    )
  }
}
export default Action;
