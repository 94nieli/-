import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import User from './components/user/user';
import Food from './components/food/food';
import Profit from './components/profit/profit';
import Room from './components/room/room';
import Employee from './components/employee/employee';
import Memo from './components/memo/memo';
import Provider from './components/provider/provider';
import Material from './components/material/material';
// import Signout from './components/signout/signout'

import { Menu, Icon, Breadcrumb,Layout} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }
  render() {
    return (
      <Router>
        <div style={{
          height: "100%"
        }}>
        <Layout  style={{height:'100%' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" style={{height:'100%' }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
              <Menu.Item key="1">
              <Link to="/profit"><Icon type="pay-circle" />
                <span>营业额</span></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/user"><Icon type="user" />
                <span>用户</span></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/food"><Icon type="inbox" />
                <span>菜品</span></Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/material"><Icon type="shopping-cart" />
                <span>原材料</span></Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/room"><Icon type="inbox" />
                <span>房间</span></Link>
              </Menu.Item>
              {/* <Menu.Item key="6">
                <Link to="/provider"><Icon type="aliwangwang-o" />
                <span>供应商</span></Link>
              </Menu.Item> */}
              {/* <Menu.Item key="7">
                <Link to="/memo"><Icon type="calendar" />
                <span>备忘录</span></Link>
              </Menu.Item> */}
              <Menu.Item key="8">
                <Link to="/employee"><Icon type="team" />
                <span>员工</span></Link>
              </Menu.Item>

              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>其他项</span></span>}>
                <Menu.Item key="11">施工中。。。</Menu.Item>
              </SubMenu>

            </Menu>
            </div>
          </Sider>

          <Layout  style={{height:'100%' }}>
            <Header style={{
              background: '#fff',
              padding: 0
            }}>
              {/* <Signout /> */}
            </Header>
            <Content style={{
              margin: '0 16px',
              height:"85%"
            }}>
              <Breadcrumb style={{
                margin: '12px 0'
              }}>

                <Breadcrumb.Item>这货不是面包屑</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
                height:"100%"
              }}><Switch>
                <Route path="/user" render={() => {
                  return <User/>
                }}/>
                <Route path="/food" render={() => {
                  return <Food/>
                }}/>
                <Route path="/profit" render={() => {
                  return <Profit/>
                }}/>
                <Route path="/material" render={() => {
                  return <Material/>
                }}/>
                <Route path="/room" render={() => {
                  return <Room/>
                }}/>
                <Route path="/employee" render={() => {
                  return <Employee/>
                }}/>
                <Route path="/provider" render={() => {
                  return <Provider/>
                }}/>
                <Route path="/memo" render={() => {
                  return <Memo/>
                }}/>
              </Switch>

              </div>
            </Content>
            <Footer style={{
              textAlign: 'center',
              height:"5%"
            }}>
              Ant Design ©2017 Created by Dr.M
            </Footer>
          </Layout>
        </Layout>

        </div>
      </Router>
    );
  }
}

export default App;
