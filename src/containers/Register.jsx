import React, { useState } from 'react'
import Boxed from '../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button, message } from 'antd'
import { register } from '../services/auth.service'
import { registerationRules } from '../constants/rules'

const { Title } = Typography

const Login = ({ form, history }) => {

  const { getFieldDecorator } = form

  const [loading, setLoading] = useState(false)

  const handleOnSubmit = e => {
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        setLoading(true)
        register(values).then(response => {
          message.success(response.message)
          history.push('/login')
        }).catch(error => {
          message.error(error.message)
          setLoading(false)
        })
      }
    })

  }

  const comparePassword = (rule, value, callback) => {
    value && value !== form.getFieldValue('password') ? callback('Confirmation password must be same as password') : callback()
  }

  return (
    <Boxed>
      <Row className='registration-form'>
        <Col span={6} offset={9}>
          <Title level={3}>Create an account...</Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Item>
              {getFieldDecorator('email', { rules: registerationRules.email })(
                <Input prefix={<Icon type='user' />} placeholder='Email' type='email' />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', { rules: registerationRules.password })(
                <Input prefix={<Icon type='lock' />} placeholder='Password' type='password' />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('confirm_password', {
                rules: [...registerationRules.confirm_password, { validator: comparePassword }]
              })(
                <Input prefix={<Icon type='lock' />} placeholder='Confirm Password' type='password' />
              )}
            </Form.Item>

            <Form.Item>
              <Button loading={loading} htmlType='submit' type='primary'>
                <Icon type='save' /> Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Boxed>
  )
}

export default Form.create({ name: 'login-form' })(Login)