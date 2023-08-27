import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
