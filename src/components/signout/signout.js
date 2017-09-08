import React ,{Component} from 'react';
import {Button} from 'antd';
class Signout extends Component{
  render(){
    return(
        <Button style={{float:"right",margin:"20px "}}>退出登录</Button>
    )
  }
}
export default Signout;
