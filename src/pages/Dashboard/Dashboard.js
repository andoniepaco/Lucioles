import React from 'react';
import { Col, Divider, Row } from 'antd';
import './Dashboard.css';
import CardItem from '../../components/Card/CardItem';
const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

const Dashboard = () => {
  console.log('Dashboard component rendered'); // Add this line
  return (
    <div className='container'>
      <Row className="row">
        <Col className="col" span={24}>col</Col>
      </Row>
      <Row className="row">
        <Col className="col" span={24}>col</Col>
      </Row>
      <Row className="row">
        <Col className="col" span={24}>
          <Row gutter={16}>
            <Col span={8}>
              <CardItem title="Registered vacancies: 0" body="Card 1 content" className="card-item"/>
            </Col>
            <Col span={8}>
              <CardItem title="Drafts: 0" body="Card 1 content" className="card-item"/>
            </Col>
            <Col span={8}>
              <CardItem title="Hired Vacancies: 0" body="Card 1 content" className="card-item"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};


export default Dashboard;