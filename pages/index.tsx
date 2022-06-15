import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className={styles.city_container}>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            className={styles.city_video}
          >
            <source src="/assets/city.mp4" type="video/mp4" />
          </video>
          <div className={styles.city_overlay}>
            <h1 className={styles.header}> Marketing done right. </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
