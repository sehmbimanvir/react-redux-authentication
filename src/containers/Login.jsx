import React from 'react'
import Boxed from '../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button, Alert } from 'antd'
import { connect } from 'react-redux'
import { login } from '../store/actions/auth.action'
import { loginRules } from '../constants/rules'

const { Title } = Typography

const Login = ({ form, login, loading, error, success }) => {

  const { getFieldDecorator } = form

  const handleOnSubmit = e => {
    e.preventDefault()
    form.validateFields((err, credentials) => {
      if (!err) {
        login(credentials)
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
              {getFieldDecorator('email', { rules: loginRules.email })(
                <Input prefix={<Icon type='user' />} placeholder='Email' type='email' />
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', { rules: loginRules.password })(
                <Input prefix={<Icon type='lock' />} placeholder='Password' type='password' />
              )}
            </Form.Item>

            <Form.Item>
              <Button loading={loading} htmlType='submit' type='primary'>
                <Icon type='login' /> Login
              </Button>
            </Form.Item>
          </Form>
          {error && <Alert type='error' message='Something Went Wrong' />}
          {success && <Alert type='success' message={success} />}
        </Col>
      </Row>
    </Boxed>
  )
}

const mapDispatchToProps = { login }

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.errormsg,
  success: state.auth.successmsg
})

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'login-form' })(Login))