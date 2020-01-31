import React from 'react'
import Boxed from '../shared/Boxed'
import { Row, Col, Form, Input, Icon, Typography, Button, Alert } from 'antd'
import { connect } from 'react-redux'
import { login } from '../store/actions/auth.action'

const { Title } = Typography

const Login = ({ form, login, loading, error }) => {

  const { getFieldDecorator } = form

  const handleOnSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        login({ name: 'Manvir' })
      }
    })
  }
  console.log('Loading', loading)
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
              <Button loading={loading} htmlType='submit' type='primary'>Login</Button>
            </Form.Item>
          </Form>
          {error && <Alert type='error' message='Something Went Wrong' />}
        </Col>
      </Row>
    </Boxed>
  )
}

const mapDispatchToProps = { login }

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.errormsg
})

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'login-form' })(Login))