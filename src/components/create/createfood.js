import { Modal,Input, Form,Select } from 'antd';
import React ,{ Component} from 'react';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 ,offset:1 },
  wrapperCol: { span: 8 ,offset:1},
};
class Createfood1 extends Component {
  create=()=>{
    const getFieldsValue = this.props.form.getFieldsValue();
    this.props.okcreate(getFieldsValue);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title="编辑信息"
          visible={true}
          onOk={this.create}
          onCancel={this.props.closecreate}
          style={{textAlign:"center"}}
        >
          <FormItem {...formItemLayout} label="菜名">
          {getFieldDecorator('foodname', {
            rules: [{
              required: true,
              message: '请输入名称',
            }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="价格">
        {getFieldDecorator('foodprice', {
          rules: [{
            required: true,
            message: '请输入价格',
          }],
        })(
          <Input style={{ width: '100%' }} />
        )}
      </FormItem>
        <FormItem
          {...formItemLayout}
          label="类别"
        >
          {getFieldDecorator('foodtype', {
            rules: [{ required: true,
            message: '请输入种类' }],
          })(
            <Select style={{ width: 100,float:"left" }} >
              <Option value="炒菜">炒菜</Option>
              <Option value="甜点">甜点</Option>
              <Option value="汤">汤</Option>
              <Option value="主食">主食</Option>
              <Option value="火锅">火锅</Option>
              <Option value="饮料">饮料</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="菜品编号"
        >
          {getFieldDecorator('foodid', {
            rules: [{ required: true, message: '请输入菜品编号' }],
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="图像网址"
        >
          {getFieldDecorator('foodimg', {
            rules: [{ required: false, message: '请输入图像网址' }],
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        </Modal>
      </div>
    );
  }
}
const Createfood = Form.create()(Createfood1)
export default Createfood;
