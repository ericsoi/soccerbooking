import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { ScheduleOutlined, HomeOutlined, DribbbleOutlined, UserOutlined, InfoCircleOutlined,HistoryOutlined, CopyOutlined, BulbOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import  { useState } from 'react';
import Link from 'next/link';
const items = [
  {
    key: 'home',
    className:styles.item,
    icon: <Image src="/img/icon.png" alt="" width="100" height="100" className={styles.icon} />,
    label: (
      <Link href="/">
          .
        </Link>
    ),
  },
  {},
  {
    label: (
      <Link href="/">Home</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'home1',
    icon: <HomeOutlined />,
  },

  {
    label: (
      <Link href="/about">About</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'about',
    icon: <InfoCircleOutlined />,
  },

  {
    label: (
      <Link href="/events">Events</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'events',
    icon: <ScheduleOutlined />,
  },

  {
    label: (
      <Link href="/highligts">Highlights</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'highlights',
    icon: <BulbOutlined />,
  },

  {
    label: (
      <Link href="/games">Games</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'games',
    icon: <DribbbleOutlined />,
  },
  {
    label: (
      <Link href="/history">History</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'history',
    icon: <HistoryOutlined />,
  },

  {
    label: (
      <Link href="/records">Records</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
    key: 'records',
    icon: <CopyOutlined />,
  },

  {
    key: 'profile',
    icon: <UserOutlined style={{ fontSize: '200%'}} value='Profile'/>,
    label: (
      <Link href="/profile">Profile</Link>
    ),
    className:`${styles.item} ' ' ${styles.texts} ' ' ${styles.list} ' ' ${styles.listItem}`,
  },


  // {
  //   label: 'Navigation Three - Submenu',

  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   float: 'right',
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },

];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} 
  defaultOpenKeys={['sub1']} theme="dark" 
  className={styles.container} style={{fontWeight: 'bold', fontSize:'15'}}/>;
  /*** return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Image src="/img/icon.png" alt="" width="100" height="100" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Get to know</div>
          <div className={styles.text}>Soccer-Book</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Highlights</li>
          <li className={styles.listItem}>Records</li>
          <li className={styles.listItem}>History</li>
          <li className={styles.listItem}>Games</li>
          <li className={styles.listItem}>Shop</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="30px" height="30px" />
        </div>
      </div>
    </div>
  );***/
};

export default Navbar;
