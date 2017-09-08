import { Modal,Input, Form,Select } from 'antd';
import React ,{ Component} from 'react';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 ,offset:1 },
  wrapperCol: { span: 8 ,offset:1},
};
class Creatematerial1 extends Component {
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
          <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('materialname', {
            rules: [{
              required: true,
              message: '请输入名称',
            }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="库存">
        {getFieldDecorator('materialcount', {
          rules: [{
            required: true,
            message: '请输入库存',
          }],
        })(
          <Input style={{ width: '100%' }} />
        )}
      </FormItem>
        <FormItem
          {...formItemLayout}
          label="类别"
        >
          {getFieldDecorator('materialtype', {
            rules: [{ required: true,
            message: '请输入种类' }],
          })(
            <Select style={{ width: 100,float:"left" }} >
              <Option value="蔬菜">蔬菜</Option>
              <Option value="肉类">肉类</Option>
              <Option value="水果">水果</Option>
              <Option value="主食">主食</Option>
              <Option value="调味品">调味品</Option>

            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="原材料编号"
        >
          {getFieldDecorator('materialid', {
            rules: [{ required: true, message: '请输入编号' }],
          })(
            <Input  style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="图像网址"
        >
          {getFieldDecorator('materialimg', {
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
const Creatematerial = Form.create()(Creatematerial1)
export default Creatematerial;
