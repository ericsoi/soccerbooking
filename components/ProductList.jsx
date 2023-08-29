import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';
import VideoPlayer from './VideoPlayer';
import Image from 'next/image';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WE THE BEST</h1>
      <VideoPlayer />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <ProductCard image="/img/IMG-20230829-WA0001.jpg"/>
          <ProductCard image="/img/IMG-20230829-WA0002.jpg"/>
          <ProductCard image="/img/IMG-20230829-WA0003.jpg"/>
          <ProductCard image="/img/IMG-20230829-WA0004.jpg"/>

      </div>
    </div>
  );
};
// "/img/IMG-20230829-WA0001.jpg"
export default ProductList;
