import { Col, Row } from 'antd'
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import './style/common.less'
export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content-wrap">
            <Outlet />
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
