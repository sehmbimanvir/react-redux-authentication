import React from 'react'
import Boxed from '../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button } from 'antd'

const { Title } = Typography

const Login = ({ form }) => {

  const { getFieldDecorator } = form

  const handleOnSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }
  return (
    <Boxed>
      <Row className='login-form'>
        <Col span={6} offset={9}>
          <Title level={3}>Login to continue...</Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Email is required' }, { email: true, message: 'Invalid Email' }]
              })(
                <Input prefix={<Icon type='user' />} placeholder='Email' type='email' />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Password is required' }]
              })(
                <Input prefix={<Icon type='lock' />} placeholder='Password' type='password' />
              )}
            </Form.Item>

            <Form.Item>
              <Button htmlType='submit' type='primary'>Login</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Boxed>
  )
}

export default Form.create({ name: 'login-form' })(Login)