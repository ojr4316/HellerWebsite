/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heller&apos;s Website</title>
        <meta name="description" content="Digital Media Marketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.hero}>
        <video className={styles.homevideo} loop muted autoPlay>
          <source src="../assets/city.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <h1>Heller&apos;s Digital Media Marketing Website</h1>
          <h2>
            Where I take the ease of handling your online prescense for you!
          </h2>
          <button type="button">Get In Touch!</button>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <h1>What we do</h1>
        <div className={styles.about_container}>
          <p>Struggling to manage all the social medias for your business?</p>
          <p>That&apos;s where we come in.</p>
          <p>
            We&apos;ll take the stress of handling your online presence for you.
          </p>
        </div>
      </section>
      <section id="services" className={styles.services}>
        <h1>Our top 2 services</h1>
        <div className={styles.intro_content_container}>
          <div className={styles.intro_content}>
            <h4>Social Media Marketing</h4>
            <p>
              We&apos;ll take the ease of managing your company&apos;s social
              medias. This include but is not limited to making posts, growing
              your following, and targetted advertising.
            </p>
          </div>
          <div className={styles.intro_content}>
            <h4>Google Advertising</h4>
            <p>
              Through Google Advertising, we&apos;ll be able to help bring your
              company&apos;s website to the top of search results. We can
              optimize your posts to make sure you&apos;re one of the top
              results!
            </p>
          </div>
        </div>
      </section>
      <section id="clients" className={styles.clients}>
        <h1>Our top clients</h1>
        <div className={styles.clients_container}>
          <div className={styles.client_card}>
            <img src="../images/picture1.jpg" alt="James Dezao Law" />
          </div>
          <div className={styles.client_card}></div>
          <div className={styles.client_card}></div>
          <div className={styles.client_card}></div>
        </div>
      </section>
    </div>
  );
}
