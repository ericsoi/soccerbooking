import React from 'react';
import { Card, Col, Row, Space, Button} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
const greenButtonStyle = {
    backgroundColor: '#24dc89',
    borderColor: '#24dc89',
    color: 'white',
  };

const Pitch = (props) => ( 
    <Col span={8} key={props.time} style={{ marginBottom: '16px' }} xs={24} sm={8} >
      {/* <Card title="Card title" bordered={false}> */}
        <Card 
            bordered={true}
            hoverable
            style={{ overflow: 'contain' }} // Adjust the height and overflow
            cover={<img alt="example" style={{ height: '200px'}} src="https://img.grouponcdn.com/deal/2WQR2TPTRTqn8hKG8ZZ2Wqd7ZRtR/2W-1400x840/v1/c700x420.jpg" />}
        >
            
                <Meta
                    // title={props.location}
                    description={props.description}
                />
                <hr/>
                <Row>
                <Col span={12}><b>Time</b></Col>
                    <Col span={12}>{props.startHour}:{props.startMinutes} - {props.endHour}:{props.endMinutes - 30}</Col>
                </Row>

                {/* <Row>
                    <Col span={12}><b>Billed Duration</b></Col>
                    <Col span={12}>{props.reservationDuration- 30} minutes </Col>
                </Row> */}
           
                <Button type="primary" block style={greenButtonStyle}>
      Book Now
    </Button>
      </Card>
    </Col>
);

export default Pitch;

// {time, startHour, startMinutes, endHour, endMinutes, location, description}