import React, {Component} from 'react';
import {Tabs,Col,Button} from 'antd';
import FoodBlock from '../showblock/foodblock';
import Createfood from '../create/createfood';
import {Fooddata} from '../../data';
import './style.css';
const TabPane = Tabs.TabPane;

class Food extends Component {
  constructor(){
    super();
    this.state={
      data:localStorage.getItem("Fooddata")?JSON.parse(localStorage.getItem("Fooddata")):Fooddata,
      type:'炒菜',
      visible:false
    }
  }
  compare=(property)=>{
      return (a,b)=>{
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
      }
  }
  changetype=(key)=>{
    this.setState({
      type:key
    })
  }
  createfood=()=>{
    this.setState({
      visible:true
    })
  }
  closecreate=()=>{
    this.setState({
      visible:false
    })

  }
  okcreate=(newfood)=>{
    if(newfood.foodname&&newfood.foodprice&&newfood.foodid&&newfood.foodtype){
      let data2=[...this.state.data];
      data2.push(newfood);
      this.setState({
        data:data2.sort(this.compare('foodprice'))
      })
      localStorage.setItem("Fooddata",JSON.stringify(data2.sort(this.compare('foodprice'))));
      this.closecreate();
    }
  }
  render(){
    let nowdata=this.state.data.filter(e=>e.foodtype===this.state.type);
    console.log(nowdata);
    let foodlist=nowdata.map((e,i)=>{
      return <Col className="gutterRow" span={4} key={e.foodid}><div className="center Foodborder"><FoodBlock  {...e} /> </div></Col>
    });
    return (
      <div>
        <Tabs defaultActiveKey="炒菜" onChange={this.changetype} tabBarExtraContent={ <Button type="primary" style={{marginRight:"20px"}} onClick={this.createfood}>新增菜品</Button> }>
          <TabPane tab="炒菜" key="炒菜">
            {foodlist}
          </TabPane>
          <TabPane tab="火锅" key="火锅">
            {foodlist}
          </TabPane>
          <TabPane tab="甜点" key="甜点">
            {foodlist}
          </TabPane>
          <TabPane tab="汤" key="汤">
            {foodlist}
          </TabPane>
          <TabPane tab="饮料" key="饮料">
            {foodlist}
          </TabPane>
          <TabPane tab="主食" key="主食">
            {foodlist}
          </TabPane>

        </Tabs>
        {this.state.visible
        ?<Createfood closecreate={this.closecreate} okcreate={this.okcreate} />
        :null
        }
      </div>
    )
  }
}
export default Food;
