import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image className={styles.img} src="/img/logo.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            IT'S ALL ABOUT FOOTBALL
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR BRANCHES</h1>
          <p className={styles.text}>
            1654 R. Hard Road
            <br /> Dhaka , 85022
            <br /> (4122) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Liquid Road
            <br /> Chattogram, 85022
            <br /> (2334) 867-1011
          </p>
          <p className={styles.text}>
            2356 K. Liquid Road
            <br /> Chattogram, 85022
            <br /> (2334) 867-1011
          </p>
          <p className={styles.text}>
            2356 K. Liquid Road
            <br /> Chattogram, 85022
            <br /> (2334) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPEN HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
