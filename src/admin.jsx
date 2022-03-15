import { Col, Row } from 'antd'
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'
export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content">
            <Outlet/>
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}
