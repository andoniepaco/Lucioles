import React from 'react';
import { Col, Button, Divider, Row } from 'antd';
import './Dashboard.css';
import CardItem from '../../components/Card/CardItem';
import Chart from '../../components/ChartComponent/Chart';
import {GiTeacher} from 'react-icons/gi'
import {FaClipboardList, FaPeopleArrows} from 'react-icons/fa'

const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

const Dashboard = () => {
  console.log('Dashboard component rendered'); // Add this line
  return (
    <div className='container'>
      <Row className="row">
        <Col className="col" span={24}>
          <div className='dashboardHeader'>
            <h1>Dashboard</h1>
            <h3>How is your hiring going?</h3>
          </div>
        </Col>
      </Row>
      <Row className="row">
        <Col className="col" span={14}>
          <Chart />
        </Col>
        <Col span={10}>
          <Row className="row"> 
          <Button className='tailorMadeBtn'>
            <FaClipboardList className='tailorMadeIcon'/>
              Tailor-made Testing
            </Button>
            <Button className='interviewingBtn'>
            <FaPeopleArrows className='interviewingIcon'/>
                Interviewing Team
            </Button>
          </Row>
          <Row className="row">
          <Button className='corporateTrainingBtn'>
            <GiTeacher className='trainingIcon'/>
            Get Corporate Training
            </Button>
          </Row>  
        </Col>
      </Row>
      <Row className="row">
        <Col className="col" span={24}>
          <Row gutter={16}>
            <Col span={8}>
              <CardItem title="Registered vacancies: 0" body="Card 1 content" className="card-item" />
            </Col>
            <Col span={8}>
              <CardItem title="Drafts: 0" body="Card 1 content" className="card-item" />
            </Col>
            <Col span={8}>
              <CardItem title="Hired Vacancies: 0" body="Card 1 content" className="card-item" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};


export default Dashboard;