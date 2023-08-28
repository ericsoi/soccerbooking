import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal, Select, Space, DatePicker, Form } from 'antd';
import Reservation from './Reservation';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const [resavationProps, setresavationProps] = useState({date:null, location:null})
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured4.png',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    const formattedDate = new Date(values.date).toISOString().split('T')[0];
    setresavationProps(pre=>({...pre, date: formattedDate, location: values.location}))
    setOpen(true)
    //Can directly call props here
    

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className={styles.container}>
      <div
        className="searchbarmobile"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        
      <Space direction="vertical" size="large">
        <div size="large" style={{ textAlign: 'center', left: '50%', color:"black" }}><h1>Book a sports facility near you </h1></div>
        <Form // {...layout}
              name="basic"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
          <Space.Compact size='large'>
            <Form.Item
              name="location"
              rules={[
                {
                  required: true,
                  message: 'Please select location!',
                },
              ]}
            >
            <Select
                name="location"
                showSearch
                style={{ width: 200, zIndex: 99999}}
                size='large'
                placeholder="Search location"
                optionFilterProp="children"
                options={[
                  {
                    key:'Kamptoyoyo',
                    value: 'Kamptoyoyo',
                    label: 'Kamptoyoyo',
                  },
                  {
                    key:'Ziwani',
                    value: 'Ziwani',
                    label: 'Ziwani',
                  },
                ]}
                
              />
              </Form.Item>
              <Form.Item
                  name="date"
                  rules={[
                    {
                      required: true,
                      message: 'Please Select Date!',
                    },
                  ]}
                >
                  <DatePicker size="large" name="date" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
            </Space.Compact>
        </Form>
      </Space>
      <Modal
        // title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Reservation {...resavationProps}/>
        {console.log(resavationProps)}
      </Modal>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
