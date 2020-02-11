import React, { useState } from 'react'
import Boxed from '../../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button, message } from 'antd'
import { loginRules } from '../../constants/rules'
import { sendForgotPasswordLink } from '../../services/auth.service'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Forgot = ({ form, history }) => {

  const [loading, setLoading] = useState(false)
  const { getFieldDecorator } = form

  const handleOnSubmit = e => {
    e.preventDefault()
    form.validateFields((err, data) => {
      if (err)
        return false

      setLoading(true)
      sendForgotPasswordLink(data).then(response => {
        message.success(response.data.message)
        history.push('login')
      }).catch(err => {
        setLoading(false)
        message.error(err.response.data.message)
      })
    })
  }

  return (
    <Boxed>
      <Row className='forgot-password-form'>
        <Col span={6} offset={9}>
          <Title level={3}>Forgot your password ?</Title>
          <Form onSubmit={handleOnSubmit}>
            <Form.Item>
              {getFieldDecorator('email', { rules: loginRules.email })(
                <Input prefix={<Icon type='user' />} placeholder='Email' type='email' />
              )}
            </Form.Item>

            <Form.Item>
              <Button loading={loading} htmlType='submit' type='primary'>
                <Icon type='retweet' /> Reset Password
              </Button>
            </Form.Item>

            <Link to="login" >&laquo; Back to login</Link>

          </Form>
        </Col>
      </Row>
    </Boxed>
  )
}

export default Form.create({ name: 'forgot-password-form' })(Forgot)