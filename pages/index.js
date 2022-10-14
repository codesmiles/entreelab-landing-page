import Head from "next/head";
import Footer from "../components/landing-page/footer";
import RequestDemo from "../components/landing-page/requestDemo";
import WhyOurProduct from "../components/landing-page/whyOurProduct";
import SmSoftware from "../components/landing-page/smSoftware";
import HrSoftware from "../components/landing-page/hrSoftware";
import AcctSoftware from "../components/landing-page/accountingSoftware";
import WhatWeOffer from "../components/landing-page/whatWeOffer";
import AboutEntreelab from "../components/landing-page/aboutEntreelab";
import NavBar from "../components/landing-page/navbar";
import ContactUs from "../components/landing-page/contactUs";
export default function Home() {
  return (
    <>
      <Head>
        <title>Entreelab | Home</title>
        <meta name="description" content="Entreelab | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <ContactUs />
        <AboutEntreelab />
        <WhatWeOffer />
        <AcctSoftware />
        <HrSoftware />
        <SmSoftware />
        <WhyOurProduct />
        <RequestDemo />
        <Footer />
      </main>
    </>
  );
}
