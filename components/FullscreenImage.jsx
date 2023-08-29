import { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

const FullscreenImage = ({ image }) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
    
      <Image src={image} alt="" width="500" height="500"  onClick={showModal}/>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel} 
        centered
        bodyStyle={{ padding: 0, textAlign: 'center' }}
      >
        <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
          <Image src={image} alt="Fullscreen" layout="fill" objectFit="contain"/>
        </div>
      </Modal>
    </div>
  );
};

export default FullscreenImage;
