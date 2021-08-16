 import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import teamImg from "../public/team.svg";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="random next app" />
        <title>Next | Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1 className={styles.leftTitle}>Welcome Our Blog</h1>
          <p className={styles.leftText}>
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
          </p>
        </div>
        <div className={styles.rightContent}>
          <Image loading="lazy" src={teamImg} width={600} />
        </div>
      </div>
    </>
  );
}
