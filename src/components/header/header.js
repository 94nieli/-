import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import './style.css'
const SubMenu = Menu.SubMenu;

class Header extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div style={{ width: 240 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pay-circle" />
            <span>营业额</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span>用户</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>菜品</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="shopping-cart" />
            <span>原材料</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="inbox" />
            <span>房间</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="aliwangwang-o" />
            <span>供应商</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="ellipsis" />
            <span>杂物</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="team" />
            <span>员工</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="calendar" />
            <span>备忘录</span>
          </Menu.Item>

          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Header;
