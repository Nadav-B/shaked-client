import Head from "next/head";
import Article from "./article";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href={"/article"}>article test</Link>
      </main>

      <footer></footer>
    </div>
  );
};
export default Index;
