import React,{Component} from 'react';
import {Rate} from 'antd';
class Judge extends Component{
  render(){
    return(
      <Rate allowHalf disabled defaultValue={this.props.rate} />
    )
  }
}
Judge.defaultProps={
  rate:1
}
export default Judge;
