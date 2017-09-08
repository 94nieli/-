import { Modal,Input, Form,Select } from 'antd';
import React ,{ Component} from 'react';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 ,offset:1 },
  wrapperCol: { span: 8 ,offset:1},
};
class Createroomlist1 extends Component {
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
          <FormItem {...formItemLayout} label="时间">
          {getFieldDecorator('date', {
            rules: [{
              required: true,
              message: '请输入时间',
            }],
            initialValue: childinfo.date
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="客户">
        {getFieldDecorator('user', {
          rules: [{
            required: true,
            message: '请输入用户',
          }],
          initialValue: childinfo.user
        })(
          <Input style={{ width: '100%' }} />
        )}
      </FormItem>
        <FormItem
          {...formItemLayout}
          label="备注"
        >
          {getFieldDecorator('ps', {
            rules: [{ required: false, message: '请输入备注' }],
            initialValue: childinfo.ps
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>

        </Modal>
      </div>
    );
  }
}
const Createroomlist = Form.create()(Createroomlist1)
export default Createroomlist;
