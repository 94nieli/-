import React, {Component} from 'react';
import { Avatar } from 'antd';
import Judge from '../judge/judge';
class Employeeinfo extends Component {
  render() {
    let {employeeavatar,employeeid,employeename,employeesex,employeephone,employeedate,employeerate} =this.props;
    return (
      <div>
          <p><Avatar size="large"  src={employeeavatar}  /></p>
          <p>{employeename}</p>
          <p>{employeesex}</p>
          <p>入职日期：{employeedate}</p>
          <p>员工编号：{employeeid}</p>
          <p>{employeephone}</p>
          <Judge  rate={parseInt(employeerate)} />
      </div>
    )
  }
}
export default Employeeinfo;
