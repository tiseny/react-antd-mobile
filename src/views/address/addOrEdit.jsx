import React from 'react'
import { Card, WingBlank, Picker, WhiteSpace, Checkbox, List, TextareaItem,  InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form';
import { district, provinceLite } from 'antd-mobile-demo-data';
import './add-edit.less';


class AddOrEdit extends React.PureComponent {

  componentWillMount() {
    const { onInit } = this.props

    onInit({
      title: '邮寄地址',
      hasHeader: false,
    })
  }

  render() {
    const { getFieldProps } = this.props.form;
    return <section className="inner-page address-add-page">
      <List>
        <InputItem
          {...getFieldProps('name')}
          clear
          placeholder="请输入联系人姓名"
          ref={el => this.autoFocusInst = el}
        >姓名</InputItem>
        <InputItem
          {...getFieldProps('phone')}
          type="phone"
          clear
          placeholder="请输入联系电话"
          ref={el => this.phone = el}
        >联系电话</InputItem>
         <Picker extra="请选择所在地区"
          data={district}
          title="省市区"
          {...getFieldProps('district', {
            initialValue: ['340000', '341500', '341502'],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">所在地区</List.Item>
        </Picker>
        <TextareaItem
          title="详细地址"
          placeholder="请输入详细地址"
          clear
          ref={el => this.area = el}
          {...getFieldProps('count', {
            initialValue: ''
          })}
          rows={5}
          count={100}
        />
      </List>

      <Button type="primary" id="save-btn">保存</Button>
    </section>
  }
}

export default createForm()(AddOrEdit)
