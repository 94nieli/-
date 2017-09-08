import { Modal,Input, Form,Select } from 'antd';
import React ,{ Component} from 'react';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 ,offset:1 },
  wrapperCol: { span: 8 ,offset:1},
};

class Createuser1 extends Component {
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
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '请输入名称',

            }],
            initialValue: childinfo.username
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="性别"
        >
          {getFieldDecorator('usersex', {
            rules: [{ required: true,
            message: '请输入性别' }],
            initialValue: childinfo.usersex
          })(
            <Select style={{ width: 100,float:"left" }} >
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="会员等级"
        >
          {getFieldDecorator('userrate', {
            rules: [{ required: true, message: '请输入会员等级' }],
            initialValue: childinfo.userrate
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="会员编号"
        >
          {getFieldDecorator('userid', {
            rules: [{ required: true, message: '请输入会员编号' }],
            initialValue: childinfo.userid
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="电话号码"
        >
          {getFieldDecorator('userphone', {
            rules: [{ required: true, message: '请输入电话号码' }],
            initialValue: childinfo.userphone
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="头像网址"
        >
          {getFieldDecorator('useravatar', {
            rules: [{ required: false, message: '请输入头像网址' }],
            initialValue: childinfo.useravatar
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>

        </Modal>
      </div>
    );
  }
}
const Createuser = Form.create()(Createuser1)
export default Createuser;
