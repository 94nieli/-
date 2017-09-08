import React, {Component} from 'react';
import {Tabs,Col,Button} from 'antd';
import MaterialBlock from '../showblock/materialblock';
import './style.css';
import Creatematerial from '../create/creatematerial';
import {Materialdata} from '../../data';
const TabPane = Tabs.TabPane;
const operations =<Button type="primary" style={{marginRight:"20px"}}>新增原材料</Button>  ;

class Material extends Component {
  constructor(){
    super();
    this.state={
      data:localStorage.getItem("materialdata")?JSON.parse(localStorage.getItem("materialdata")):Materialdata,
      type:'蔬菜',
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
  creatematerial=()=>{
    this.setState({
      visible:true
    })
  }
  closecreate=()=>{
    this.setState({
      visible:false
    })

  }
  okcreate=(newmaterial)=>{
    console.log(newmaterial);
    if(newmaterial.materialname&&newmaterial.materialcount&&newmaterial.materialid&&newmaterial.materialtype){
      let data2=[...this.state.data];
      data2.push(newmaterial);
      this.setState({
        data:data2.sort(this.compare('materialid'))
      })
      localStorage.setItem("materialdata",JSON.stringify(data2.sort(this.compare('materialid'))));
      this.closecreate();
    }
  }
  render(){
    let nowdata=this.state.data.filter(e=>e.materialtype===this.state.type);
    console.log(nowdata);
    let materiallist=nowdata.map((e,i)=>{
      return <Col className="gutterRow" span={4} key={e.materialid}><div className="center Materialborder"><MaterialBlock  {...e} /> </div></Col>
    });
    return (
      <div>
        <Tabs defaultActiveKey="蔬菜" onChange={this.changetype} tabBarExtraContent={ <Button type="primary" style={{marginRight:"20px"}} onClick={this.creatematerial}>新增原材料</Button> }>
          <TabPane tab="蔬菜" key="蔬菜">
            {materiallist}
          </TabPane>
          <TabPane tab="肉类" key="肉类">
            {materiallist}
          </TabPane>
          <TabPane tab="水果" key="水果">
            {materiallist}
          </TabPane>
          <TabPane tab="主食" key="主食">
            {materiallist}
          </TabPane>
          <TabPane tab="调味品" key="调味品">
            {materiallist}
          </TabPane>

        </Tabs>
        {this.state.visible
        ?<Creatematerial closecreate={this.closecreate} okcreate={this.okcreate} />
        :null
        }
      </div>
    )
  }
}
export default Material;
