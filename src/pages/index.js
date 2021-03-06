import Head from "next/head";
import Image from "next/image";

import avatarPic from "../../public/luna-face.png";
import studioLogo from "../../public/731-logo.jpg";
import instLogo from "../../public/inst-logo.png";
import tiktokLogo from "../../public/tiktok-logo.png";

import styles from "../styles/Home.module.css";

export default function Home({ instagramPosts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lúna the Toy Poodle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.avatar}
          src={avatarPic}
          alt="Picture of the toy poodle"
          width={150}
          height={134}
        />
        <h1 className={styles.title}>Hello! My name is Lúna!</h1>

        <h2 className={styles.description}>I'm toy poodle from Russia!</h2>
        <p className={styles.actionText}>Let's check my links!</p>

        <div className={styles.grid}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/lunar.toy/"
            className={styles.card}
          >
            <Image src={instLogo} />
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>Instagram</p>
              <p className={styles.cardText}>DM me!</p>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://vm.tiktok.com/ZSeYCnF7e/"
            className={styles.card}
          >
            <Image src={tiktokLogo} />
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>TikTok</p>
              <p className={styles.cardText}>@lunar.toy</p>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/731.studio/"
            className={styles.card}
          >
            <Image src={studioLogo} />
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>Mood</p>
              <p className={styles.cardText}>@731.studio</p>
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered with 💖 by{" "}
          <a
            href="https://www.instagram.com/rinarunaan/"
            rel="noreferrer"
            target="_blank"
          >
            {" mom"}
          </a>
        </p>
      </footer>
    </div>
  );
}
