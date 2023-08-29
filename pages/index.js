import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import GalaryImage from "../components/GalaryImage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Soccer Booking</title>
        <meta name="description" content="we the best" />
        <link rel="icon" href="/img/icon.png" />
      </Head>
      <Featured/>
      <ProductList/>
    </div>
  );
}