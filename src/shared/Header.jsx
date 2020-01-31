import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import Boxed from './Boxed'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Row>
      <Col style={{ background: '#f6f6f6' }}>
        <Boxed>
          <Menu className='custom-navbar' mode="horizontal">
            <Menu.Item className='navbar-brand'>
              <Link to="/">Brand</Link>
            </Menu.Item>

            <Menu.Item className='float-right'>
              <Link to="/register">
                <Icon type='plus' /> Logout
                </Link>
            </Menu.Item>

            <Menu.Item className='float-right'>
              <Link to="/register">
                <Icon type='plus' /> Register
                </Link>
            </Menu.Item>

            <Menu.Item className='float-right'>
              <Link to="/login">
                <Icon type='lock' /> Login
              </Link>
            </Menu.Item>
          </Menu>
        </Boxed>
      </Col>
    </Row>
  )
}

export default Header