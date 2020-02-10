import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import Boxed from './Boxed'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setLogout } from '../store/actions/auth.action'
import SubMenu from 'antd/lib/menu/SubMenu'

const Header = ({ isLoggedIn, logout, user }) => {

  const logoutUser = e => {
    e.preventDefault()
    logout()
  }

  const Links = !isLoggedIn ? (
    [
      <Menu.Item key="1" className='float-right'>
        <Link to="/register">
          <Icon type='plus' /> Register
                </Link>
      </Menu.Item>,

      <Menu.Item key="2" className='float-right'>
        <Link to="/login">
          <Icon type='lock' /> Login
        </Link>
      </Menu.Item>
    ]) : (
      [
        <SubMenu key="1" className='float-right' title={
          <><span className='submenu-title-wrapper'>
            <Icon type="user" />{user.email}
          </span> <Icon type='caret-down' /></>}>
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">
              <Icon type="setting" /> Settings
            </Menu.Item>
            <Menu.Item key="setting:2">
              <a href="true" onClick={logoutUser}>
                <Icon type="poweroff"></Icon> Logout
              </a>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      ]
    )

  return (
    <Row>
      <Col style={{ background: '#f6f6f6' }}>
        <Boxed>
          <Menu className='custom-navbar' mode="horizontal">
            <Menu.Item className='navbar-brand'>
              <Link to="/">Brand</Link>
            </Menu.Item>
            {Links}
          </Menu>
        </Boxed>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
})
const mapDispatchToProps = { logout: setLogout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
