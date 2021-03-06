import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nerd List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Tempor amet ea duis sint sit. Id ipsum exercitation ea culpa pariatur
          non labore tempor aliqua. Qui sint aute magna consectetur. Id ipsum
          exercitation ea culpa pariatur non labore tempor aliqua. Qui sint aute
          magna consectetur.
        </p>
        <p className={styles.text}>
          Tempor amet ea duis sint sit. Id ipsum exercitation ea culpa pariatur
          non labore tempor aliqua. Qui sint aute magna consectetur. Id ipsum
          exercitation ea culpa pariatur non labore tempor aliqua. Qui sint aute
          magna consectetur.
        </p>
        <Link href="nerds">
          <a className={styles.btn}>See Nerd Listing</a>
        </Link>
      </div>
    </>
  );
}
