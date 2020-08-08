import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Article from './article'
import Link from 'next/link'

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       {data.title}
       <Link href={"/article"}>
         click
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  console.log("startgin");
  const res = await fetch(`https://shakedm.co.il/api/articles/article/8`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}