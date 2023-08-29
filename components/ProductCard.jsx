import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';
import FullscreenImage from './FullscreenImage';
const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      {/* <Image src={props.image} alt="" width="500" height="500" /> */}
      <FullscreenImage key={props.image} image={props.image} />

      <h1 className={styles.title}>Product</h1>
      {/* <span className={styles.price}>$19.90</span> */}
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ProductCard;
