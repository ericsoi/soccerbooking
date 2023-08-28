import React from 'react'
import { Alert, Space, Spin } from 'antd';
import Head from "next/head";
import styles from "../../styles/Home.module.css";

function Games() {
  return (
    <div className={styles.container}
    style={{
        height: '100vh',
        width: '100vw',

      }}
    >
    <Head>
        <title>Soccer Book</title>
        <meta name="description" content="Best Soccer Shop" />
        <link rel="icon" href="/img/icon.png" />
    </Head>
        <Space direction="vertical" style={{ 
                        width: '100%', 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1 }}>

            <Spin tip="Coming Soon" size="large" >
                <div className="content" />
            </Spin>
        </Space>
    </div>
  )
}

export default Games