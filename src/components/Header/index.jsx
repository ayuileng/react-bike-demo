import { Col, Row } from 'antd'
import React, { Component } from 'react'
import Utils from '../../util/utils';
import Axios from '../../axios'
import './index.less';

export default class Header extends Component {
  state = {
    sysTime: Utils.formatDate(new Date().getTime())
  }
  componentDidMount() {
    setInterval(() => {
      let sysTime = Utils.formatDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
  }

  getWeatherData = ()=>{

    Axios.jsonp({
      url:'https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=eL0TzEXbCfE0UsymGQmFbhyHhstsVGXO&district_id=310100',
  }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span='24'>
            <span>欢迎ayuileng</span>
            <a href="#" >退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span='4' className='breadcrumb-title'>
            首页
          </Col>
          <Col span='20' className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}
