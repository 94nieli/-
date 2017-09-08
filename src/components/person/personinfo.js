import React, {Component} from 'react';
import { Avatar } from 'antd';
class Personinfo extends Component {
  render() {
    let {useravatar,userid,username,usersex,userphone,userrate} =this.props;
    return (
      <div>
          <p><Avatar size="large"  src={useravatar}  /></p>
          <p>{username}</p>
          <p>{usersex}</p>
          <p>{userrate}</p>
          <p>会员卡号：{userid}</p>
          <p>{userphone}</p>

      </div>
    )
  }
}
export default Personinfo;
