import React from 'react';
import { Card, Col, Row } from 'antd';
import './CardItem.css'
const CardItem = ({ title, body, className }) => (
    <Card title={title} bordered={false} className={className}>
      {body}
    </Card>
  );
  
  export default CardItem;