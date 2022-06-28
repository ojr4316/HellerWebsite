/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heller&apos;s Website</title>
        <meta name="description" content="Digital Media Marketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.intro_images}>
        <div className={styles.image_container}>
          <img className={styles.image} src="../images/heller.jpg" alt="A brawny looking man"/>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image2} src="../images/heller2.jpg" alt="A brawny looking man"/>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src="../images/heller3.jpg" alt="A brawny looking man"/>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src="../images/heller.jpg" alt="A brawny looking man"/>
        </div>
      </div>
      <section id="services" className={styles.services}>
        <h1>Heller&apos;s Digital Media Marketing Website</h1>
        <h2>
          Where I take the ease of handling your online prescense for you!
        </h2>
        <br />
        <h1>Our top 2 services</h1>
        <div className={styles.intro_content_container}>
          <div className={styles.intro_content}>
            <h4>Social Media Marketing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              tortor at risus viverra. Sed arcu non odio euismod lacinia at.
            </p>
          </div>
          <div className={styles.intro_content}>
            <h4>Google Advertising</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              tortor at risus viverra. Sed arcu non odio euismod lacinia at.
            </p>
          </div>
        </div>
      </section>
      <section id="clients" className={styles.clients}>
        <h1>Our top clients</h1>
        <div className={styles.clients_container}>  
          Scroller here
        </div>
      </section>
    </div>
  );
};

export default Home;
