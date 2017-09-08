import React,{Component} from 'react';
import './style.css'
class MaterialBlock extends Component{
  render(){
    return(
      <div className="center">
        <img className="imgsize" src={this.props.materialimg} alt="" />
        <p className="MaterialBigSize">{this.props.materialname}</p>
        <p className="MaterialBigSize">库存：{this.props.materialcount}</p>
        <p className="MaterialBigSize">供应商：{this.props.materialprovider}</p>
      </div>
    )
  }
}
export default MaterialBlock;
