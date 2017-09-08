import React,{Component} from 'react';
import './style.css'
class FoodBlock extends Component{
  render(){
    return(
      <div>
        <img className="imgsize" src={this.props.foodimg} alt=""/>
        <p>{this.props.foodname}</p>
        <p className="bigFontSize">价格：{this.props.foodprice}</p>
        <p className="bigFontSize">编号：{this.props.foodid}</p>
      </div>
    )
  }
}
export default FoodBlock;
