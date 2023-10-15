import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
  <div>
    <h1>Hello world</h1>
    
    <Head>
      <title>nine4</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <Header />
    <Main />
    <Footer />
  </div>
  )
}
