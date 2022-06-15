/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Link from "next/link";
import logo from "../public/assets/logo.png";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Hellfire</title>
        <meta
          name="description"
          content="Hellfire Products. Social media marketing and advertisement."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={logo.src} alt="Logo" className={styles.logo} />
          <div style={{display: "flex", flexDirection: "column"}}>
            <h3 className={styles.title_text}> Hellfire</h3>
            <h4 className={styles.title_subtext}> Advertisement and Marketing </h4>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="">
            <p className={styles.nav_option}>About</p>
          </Link>
          <Link href="">
            <p className={styles.nav_option}>Services</p>
          </Link>
          <Link href="">
            <p className={styles.nav_option}>Our Work</p>
          </Link>
          <Link href="">
            <p className={styles.nav_option}>Blog</p>
          </Link>
          <Link href="">
            <p className={styles.nav_option}>Contact</p>
          </Link>
        </nav>
      </header>
      <main className={styles.content}>{props.children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
