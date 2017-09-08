import { Modal,Input, Form,Select } from 'antd';
import React ,{ Component} from 'react';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 ,offset:1 },
  wrapperCol: { span: 8 ,offset:1},
};

class Employee1 extends Component {
  create=()=>{
    const getFieldsValue = this.props.form.getFieldsValue();
    this.props.okcreate(getFieldsValue);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {childinfo}=this.props;
    return (
      <div>
        <Modal
          title="编辑信息"
          visible={true}
          onOk={this.create}
          onCancel={this.props.closecreate}
          style={{textAlign:"center"}}
        >
          <FormItem {...formItemLayout} label="姓名">
          {getFieldDecorator('employeename', {
            rules: [{
              required: true,
              message: '请输入名称',

            }],
            initialValue: childinfo.employeename
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('employeesex', {
            rules: [{ required: true,
            message: '请输入性别' }],
            initialValue: childinfo.employeesex
          })(
            <Select style={{ width: 100,float:"left" }} >
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="员工评分"
        >
          {getFieldDecorator('employeerate', {
            rules: [{ required: true, message: '请输入员工评分' }],
            initialValue: childinfo.employeerate
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="员工编号"
        >
          {getFieldDecorator('employeeid', {
            rules: [{ required: true, message: '请输入员工编号' }],
            initialValue: childinfo.employeeid
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电话号码"
        >
          {getFieldDecorator('employeephone', {
            rules: [{ required: true, message: '请输入电话号码' }],
            initialValue: childinfo.employeephone
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电话号码"
        >
          {getFieldDecorator('employeedate', {
            rules: [{ required: true, message: '请输入入职日期' }],
            initialValue: childinfo.employeedate
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="头像网址"
        >
          {getFieldDecorator('employeeavatar', {
            rules: [{ required: false, message: '请输入头像网址' }],
            initialValue: childinfo.employeeavatar
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>

        </Modal>
      </div>
    );
  }
}
const CreateEmployee = Form.create()(Employee1)
export default CreateEmployee;
