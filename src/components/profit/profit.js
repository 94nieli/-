import React ,{ Component } from 'react';
import Charts from './charts';
import Action from './action';
import {Profitdata} from '../../data';
class Profit extends Component{
  constructor(){
    super();
    this.state={
      data:localStorage.getItem("Profitdata")?JSON.parse(localStorage.getItem("Profitdata")):Profitdata,
      maxval:'8.72',
      newdata:null
    }
  }
  getnew=(newone)=>{
    this.setState({
      newdata:newone
    })
  }
  createnew=()=>{
    if(this.state.newdata){
      let newone=[(this.state.data.length+1).toString()];
      let a=0;
      newone.push(this.state.newdata)
      if(parseFloat(this.state.newdata)>=parseFloat(this.state.maxval)){
        this.setState({
          maxval:this.state.newdata
        });
        a=1;
      }else{
        a=this.state.newdata/this.state.maxval;
      }
      console.log(a);
      newone.push(a.toString());
      let arr=[...this.state.data];
      arr.push(newone);
      this.setState({
        data:arr,
        newdata:null
      });
      localStorage.setItem("Profitdata",JSON.stringify(arr));
    }
  }
  render(){
    let {data} =this.state
    return(
      <div style={{height:"100%"}}><Charts data={data} /><Action style={{float:"right"}} getnew={this.getnew} createnew={this.createnew}  /></div>
    )
  }
}
export default Profit;
