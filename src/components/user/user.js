import React, {Component} from 'react';
import { Col,Button,Input,Select} from 'antd';
import './style.css';
import {Userdata} from '../../data';
import Personinfo from '../person/personinfo';
import Createuser from '../create/createuser';
const Option = Select.Option;
const Search = Input.Search;
class User extends Component {
  constructor(){
    super();
    this.state={
      data:localStorage.getItem("userdata")?JSON.parse(localStorage.getItem("userdata")):Userdata.sort(this.compare('userid')),
      visible: false,
      searchtype:'all',
      searchcontent:null,
      childinfo:{},
      isnew:false
    }
  }
  deleteuser=(userdata)=>{

    let arr=userdata.map((e)=>{
      return e.userid
    })
    let data2=[...this.state.data];
    arr.forEach((e)=>{

      data2.forEach((usere,useri)=>{
        if(usere.userid==e){
          data2.splice(useri,1)
        }
      })
    })
    this.setState({
      data:data2
    })
    localStorage.setItem("userdata",JSON.stringify(data2.sort(this.compare('userid'))));
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
  newuser=()=>{
    this.setState({
      isnew:true
    });
  }
  newuserclick=()=>{
    this.newuser();
    this.showModal();
  }
  changevalueclick=(e)=>{
    this.createchildinfo(this.findkey(e.target));
    this.showModal();
  }
  showCreateUser=()=>{
    this.setState({isCreateUser:!this.state.isCreateUser})
    alert(this.state.isCreateUser);
  }
  okcreate=(newuser)=>{
    if(newuser.userid&&newuser.username&&newuser.userphone&&newuser.usersex&&newuser.userrate){
      let data2=[...this.state.data];
      let a=null;
      this.setState({
        childinfo:newuser
      })
      if(!this.state.isnew){
        data2.forEach((e,i)=>{
          if(this.state.childinfo.userid==e.userid){
            a=i;
          }
        })
        data2.splice(a,1,newuser);
      }else{
        data2.push(newuser);
      }
      data2.sort(this.compare('userid'));
      localStorage.setItem("userdata",JSON.stringify(data2.sort(this.compare('userid'))));
      this.setState({
        visible:false,
        data:data2,
        isnew:false,
        childinfo:{},
        deletelist:[]
      });

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
        return data.filter((e,i)=>e.username===this.state.searchcontent);
      case 'sex' :
          return data.filter((e,i)=>e.usersex===this.state.searchcontent);
      case 'id' :
          return data.filter((e,i)=>e.userid===this.state.searchcontent);
      case 'phone' :
          return data.filter((e,i)=>e.userphone===this.state.searchcontent);
      case 'rate' :
          return data.filter((e,i)=>e.userrate===this.state.searchcontent);
      default :
          break ;
    }
  }
  createchildinfo=(i)=>{
    let obj=this.state.data.filter((e)=>{
        return e.userid==i
      })
    this.setState({
      childinfo:obj[0]
    })
  }
  render() {
    let {data,childinfo} = this.state;
    let Userlist=this.filter(data).map((e,i)=>{
      return <Col className="gutterRow" span={4} key={e.userid}  ><div className="center Userborder"  name={e.userid} onDoubleClick={this.changevalueclick} ><Personinfo {...e}/> </div></Col>
    })
    return (
      <div >
        <div style={{margin:"20px"}}>
          <span className="header">会员总数为：{data.length}</span>
          <Button type="primary" onClick={this.newuserclick } style={{margin:" 0 20px"}}>新建用户</Button>
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
          <Button type="primary" onClick={()=>{this.deleteuser(this.filter(data))} } style={{margin:" 0 20px"}}>删除列表用户</Button>

        </div>
          {this.state.visible
          ?<Createuser closecreate={this.closecreate} okcreate={this.okcreate} childinfo={childinfo}/>
          :null
          }
          {Userlist}
      </div>
    )
  }
}
export default User;
