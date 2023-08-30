import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';
import VideoPlayer from './VideoPlayer';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>You are in good hands</h1>
      <p className={styles.desc}>
        At abc, we're passionate about bringing sports enthusiasts together and making the process of booking pitches seamless and enjoyable. Whether you're a football fanatic, or someone who enjoys a friendly games on the stands, we've got you covered.
      </p>
      <VideoPlayer />
      
      <div className={styles.wrapper}>
          <ProductCard image="/img/IMG-20230829-WA0001.jpg" desc="Our platform offers a selection of sports facilities to suit every player's preferences"/>
          <ProductCard image="/img/IMG-20230829-WA0002.jpg" desc="We offer secure online payments, ensuring that your transactions are ever protected"/>
          <ProductCard image="/img/IMG-20230829-WA0003.jpg" desc="Abc fields is not just a booking platform, we are a community of sports enthusiasts"/>
          <ProductCard image="/img/IMG-20230829-WA0004.jpg" desc="Say goodbye to endless phone calls confusion and standing in long queues for bookings"/>

      </div>
    </div>
  );
};
// "/img/IMG-20230829-WA0001.jpg"
export default ProductList;
