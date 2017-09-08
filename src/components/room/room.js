import React ,{ Component } from 'react';
import {Tabs,Button,Table,Input} from 'antd';
import {Roomlist} from '../../data';
import Createroomlist from '../create/createroomlist'
import './style.css';
const TabPane = Tabs.TabPane;
class  Room extends Component{
    constructor(){
      super();
      this.state={
        roomarr:[1001,1002,1003,1004,1005],
        list:localStorage.getItem("Roomlist")?JSON.parse(localStorage.getItem("Roomlist")):Roomlist,
        nowtype:1001,
        isnew:false,
        visible:false,
        newnumber:null,
        childinfo:{}
      }
    }
  changetype=(key)=>{
    this.setState({
      nowtype:key
    })
  }
  compare=(property)=>{
      return (a,b)=>{
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
      }
  }
  createroom=()=>{
    if(this.state.newnumber){
      let roomarr2=[...this.state.roomarr];
      roomarr2.push(this.state.newnumber);
      this.setState({
        roomarr:roomarr2,
        newnumber:null
      })
    }
  }
  createroomlist=()=>{
    this.setState({
      visible:true,
      isnew:true
    })
  }
  closecreate=()=>{
    this.setState({
      visible:false,
      isnew:false,
      childinfo:{}
    })
  }
  okcreate=(newroomlist)=>{
    if(newroomlist.date&&newroomlist.user){
      let list2=[...this.state.list];
      let a=null;
      newroomlist.type=this.state.nowtype;
      newroomlist.key=new Date();
      if(this.state.isnew){
        list2.push(newroomlist)
      }else{
        list2.forEach((e,i)=>{
          if(this.state.childinfo.key==e.key){
            a=i;
          }
        })
        list2.splice(a,1,newroomlist);
      }
      this.setState({
        list:list2,
        visible:false,
        isnew:false,
        childinfo:{}
      });
      console.log(list2.sort(this.compare('key')));
      localStorage.setItem("Roomlist",JSON.stringify(list2.sort(this.compare('key'))));
    }
  }
  deleteroomlist=(record)=>{
    let list2=[...this.state.list];
    let a=null;
    list2.forEach((e,i)=>{
      if(this.state.childinfo.key==e.key){
        a=i;
        }
      })
    list2.splice(a,1);
    this.setState({list:list2});
    localStorage.setItem("Roomlist",JSON.stringify(list2.sort(this.compare('key'))));
  }

  render(){
    const columns = [{
          title: '日期',
          dataIndex: 'date',
          key:'date',
          width:'25%',
        }, {
          title: '客户',
          dataIndex: 'user',
          key:'user',
          width:'15%'
        }, {
          title: '备注',
          dataIndex: 'ps',
          width:'45%',
          key:'ps'
        }, {
          title: '操作',
          dataIndex: 'action',
          key:'action',
          width:'15%',
          render: (text,record) => (
            <span>
              <Button type='primary' onClick={()=>{this.setState({childinfo:record,visible:true})}}>编辑</Button>
              <Button type='primary' style={{marginLeft:30}} onClick={()=>{this.deleteroomlist(record)}} >删除</Button>
            </span>
          )
        }];
    let roomlist=this.state.list.filter(e=>e.type==this.state.nowtype);
    let rooms=this.state.roomarr.map((e,i)=>{
      return <TabPane tab={e} key={e} ><Table key={i+new Date()}  columns={columns} dataSource={roomlist} /></TabPane>
    })

    return(
      <div>
        <Tabs type='card' defaultActiveKey="1001" onChange={(key)=>{this.changetype(key)}} tabBarExtraContent={  <div>
            <Input style={{width:80,marginRight:'20px'}} placeholder="输入房间号" onBlur={(e)=>{this.setState({newnumber:e.target.value})}} />  <Button type="primary" onClick={this.createroom}>新建房间</Button> <Button type="primary" onClick={this.createroomlist}>新建房间信息</Button>
          </div> }>
          {rooms}
        </Tabs>
        {this.state.visible
        ?<Createroomlist closecreate={this.closecreate} okcreate={this.okcreate} childinfo={this.state.childinfo} />
        :null
        }
      </div>
    )
  }
}
export default Room;
