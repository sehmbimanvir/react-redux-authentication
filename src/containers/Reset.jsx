import React, { useState, useEffect } from 'react'
import Boxed from '../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button, message } from 'antd'
import { registerationRules } from '../constants/rules'
import { verifyResetToken, resetPassword } from '../services/auth.service'

const { Title } = Typography

const Reset = ({ form, match, history }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    verifyResetToken(match.params.token).then().catch(() => {
      history.push('/login')
    })
  }, [])

  const { getFieldDecorator } = form
  const handleOnSubmit = e => {
    e.preventDefault()
    form.validateFields((err, data) => {
      if (err)
        return false

      setLoading(true)
      resetPassword(match.params.token, data).then(({ data }) => {
        message.success(data.message)
        history.push('/login')
      }).catch(err => {
        setLoading(false)
        message.error(err.response.data.message)
      })

    })
  }

  const comparePassword = (rule, value, callback) => {
    value && value !== form.getFieldValue('password') ? callback('Confirmation password must be same as password') : callback()
  }

  return (
    <Boxed>
      <Row className='reset-password-form'>
        <Col span={6} offset={9}>
          <Title level={3}>Reset Password</Title>
          <Form onSubmit={handleOnSubmit}>

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
                <Icon type='retweet' /> Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Boxed>
  )
}

export default Form.create({ name: 'reset-password-form' })(Reset)