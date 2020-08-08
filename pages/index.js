import Head from "next/head";
import styles from "../styles/Home.module.css";
import Article from "./article";
import Link from "next/link";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={"/article"}>click</Link>
        <h1>hey</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Index;
