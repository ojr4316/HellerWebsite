import { ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children?: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className={styles.page_container}>
      <header className={styles.header_main}>
        <div className={styles.header_container}>
          <Link href="./">
            <div className={styles.logo_container}>Heller Website</div>
          </Link>
          <div className={styles.pages_container}>
            <Link href="/about"><p className={styles.link_text}>About</p></Link>
            <Link href="/#"><p className={styles.link_text}>Portfolio</p></Link>
            <Link href="/blog"><p className={styles.link_text}>Blog</p></Link>
            <Link href="/#"><p className={styles.link_text}>Services</p></Link>
            <Link href="/#">
              <div className={styles.contact_button}>Contact</div>
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer_main}>
        <div className={styles.footer_container}>
          <div className={styles.footer_social_logo_container}>
            <Link href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.footer_social_logo}
              />
            </Link>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.footer_social_logo}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles.footer_social_logo}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className={styles.footer_social_logo}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
