import React, {Component} from 'react';
import { Col,Button,Input,Select} from 'antd';
import './style.css';
import {Employeedata} from '../../data';
import Employeeinfo from '../person/employeeinfo';
import Createemployee from '../create/createemployee';
const Option = Select.Option;
const Search = Input.Search;
class Employee extends Component {
  constructor(){
    super();
    this.state={
      data:localStorage.getItem("Employeedata")?JSON.parse(localStorage.getItem("Employeedata")):Employeedata.sort(this.compare('employeeid')),
      visible: false,
      searchtype:'all',
      searchcontent:null,
      childinfo:{},
      isnew:false
    }
  }
  deleteemployee=(Employeedata)=>{

    let arr=Employeedata.map((e)=>{
      return e.employeeid
    })
    let data2=[...this.state.data];
    arr.forEach((e)=>{

      data2.forEach((employeee,employeei)=>{
        if(employeee.employeeid===parseInt(e)){
          data2.splice(employeei,1)
        }
      })
    })
    this.setState({
      data:data2
    })
    localStorage.setItem("Employeedata",JSON.stringify(data2.sort(this.compare('employeeid'))));
  }
  compare=(property)=>{
      return (a,b)=>{
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
      }
  }
  showModal = () => {
    this.setState({
      visible:true
    });
  }
  newemployee=()=>{
    this.setState({
      isnew:true
    });
  }
  newemployeeclick=()=>{
    this.newemployee();
    this.showModal();
  }
  changevalueclick=(e)=>{
    this.createchildinfo(this.findkey(e.target));
    this.showModal();
  }
  showCreateemployee=()=>{
    this.setState({isCreateemployee:!this.state.isCreateemployee})
    alert(this.state.isCreateemployee);
  }
  okcreate=(newemployee)=>{
    if(newemployee.employeeid&&newemployee.employeename&&newemployee.employeephone&&newemployee.employeesex&&newemployee.employeerate&&newemployee.employeedate){
      let data2=[...this.state.data];
      let a=null;
      this.setState({
        childinfo:newemployee
      })
      if(!this.state.isnew){
        data2.forEach((e,i)=>{
          if(parseInt(this.state.childinfo.employeeid)===parseInt(e.employeeid)){
            a=i;
          }
        })
        data2.splice(a,1,newemployee);
        console.log(data2);
      }else{
        data2.push(newemployee);
      }
      data2.sort(this.compare('employeeid'));
      localStorage.setItem("Employeedata",JSON.stringify(data2.sort(this.compare('employeeid'))));

      this.setState({
        visible:false,
        data:data2,
        isnew:false,
        childinfo:{}
      });
      console.log(this.state.data);
      console.log(data2);
    }
  }
  closecreate=()=>{
    this.setState({
      visible:false,
      isnew:false,
      childinfo:{}
    });
  }
  findkey=(e)=>{
    if(e.getAttribute('name')){
      return e.getAttribute('name');
    }else{
      return this.findkey(e.parentNode)
    }

  }
  filter=(data)=>{
    switch (this.state.searchtype){
      case 'all':
        return  data
      case 'name' :
        return data.filter((e,i)=>e.employeename===this.state.searchcontent);
      case 'sex' :
          return data.filter((e,i)=>e.employeesex===this.state.searchcontent);
      case 'id' :
          return data.filter((e,i)=>e.employeeid===this.state.searchcontent);
      case 'phone' :
          return data.filter((e,i)=>e.employeephone===this.state.searchcontent);
      case 'rate' :
          return data.filter((e,i)=>e.employeerate===this.state.searchcontent);
      default :
          break ;
    }
  }
  createchildinfo=(i)=>{
    let obj=this.state.data.filter((e)=>{
        return e.employeeid===parseInt(i)
      })
    this.setState({
      childinfo:obj[0]
    })
  }
  render() {
    let {data,childinfo} = this.state;
    let employeelist=this.filter(data).map((e,i)=>{
      return <Col className="gutterRow" span={4} key={e.employeeid}  ><div className="center Employeeborder"  name={e.employeeid} onDoubleClick={this.changevalueclick} ><Employeeinfo {...e}/> </div></Col>
    })
    return (
      <div >
        <div style={{margin:"20px"}}>
          <span className="header">职员总数为：{data.length}</span>
          <Button type="primary" onClick={this.newemployeeclick } style={{margin:" 0 20px"}}>新建职员</Button>
          <Select defaultValue="all" style={{ width: 120 ,marginLeft:40}} onSelect={(e)=>{this.setState({searchtype:e});}}>
            <Option value="all">所有</Option>
            <Option value="name">通过姓名查找</Option>
            <Option value="sex">通过性别查找</Option>
            <Option value="id">通过编号查找</Option>
            <Option value="phone">通过电话查找</Option>
            <Option value="rate">通过级别查找</Option>
          </Select>
          <Search
            placeholder="请输入搜索内容"
            style={{ width: 200 ,marginLeft:40}}
            onSearch={(value) => {this.setState({searchcontent:value})}}
          />
          <Button type="primary" onClick={()=>{this.deleteemployee(this.filter(data))} } style={{margin:" 0 20px"}}>删除列表职员</Button>

        </div>
          {this.state.visible
          ?<Createemployee closecreate={this.closecreate} okcreate={this.okcreate} childinfo={childinfo}/>
          :null
          }
          {employeelist}
      </div>
    )
  }
}
export default Employee;
