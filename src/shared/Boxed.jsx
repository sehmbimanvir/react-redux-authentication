import React from 'react'
import { Row, Col } from 'antd'

const Boxed = ({ children }) => (
  <Row>
    <Col span={22} offset={1}>{children}</Col>
  </Row>
)

export default Boxed