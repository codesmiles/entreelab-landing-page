import Head from "next/head";
import Image from "next/image";
import Footer from "../components/landing-page/footer";
import RequestDemo from "../components/landing-page/requestDemo";
import WhyOurProduct from "../components/landing-page/whyOurProduct";
import SmSoftware from "../components/landing-page/smSoftware";
import HrSoftware from "../components/landing-page/hrSoftware";
import AcctSoftware from "../components/landing-page/accountingSoftware";
export default function Home() {
  return (
    <>
      <Head>
        <title>Entreelab | Home</title>
        <meta name="description" content="Entreelab | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
          <div>
            <Image src={``} width={``} height={``} />
            <Image src={``} width={``} height={``} />
          </div>
          <div>
            <p>login on desktop</p>
            <div>
              <ul>
                <lh>
                  <a>login</a>
                </lh>
                <div>
                  <li>login for lms</li>
                  <li>login for accounting</li>
                  <li>login for hrms</li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <section>
          <div>
            <h1>solutions for every business</h1>
            <p>
              We have positioned ourselves to be the number one stop gap for
              every software solution of your need
            </p>
            <a>contact us</a>
          </div>
          <div>
            <Image src={``} width={``} height={``} />
            <Image src={``} width={``} height={``} />
          </div>
        </section>
        <section>
          <div>
            <Image src={``} width={``} height={``} />
            <Image src={``} width={``} height={``} />
          </div>
          <div>
            <h1>about Entreelab</h1>
            <p>
              We are a software development company in Nigeria that works with
              Enterprise systems, Schools and Companies. As a privately owned
              company, EntréeLab provides IT Consultancy, software design and
              development offering fully-fledged services for software
              development and engineering, empowering effective near-shore
              management to its clients.
            </p>
          </div>
        </section>
        <section>
          <h1>what we offer</h1>
          <p>
            Our solutions are built to enhance the business operation of our
            clients by developing and/or implementing premium IT products and
            services. You could request a demo for any of our products.
          </p>
          <a>request demo</a>
        </section>
        <AcctSoftware/>
        <HrSoftware/>
        <SmSoftware/>
        <WhyOurProduct/>
        <RequestDemo/>
        <Footer/>
      </main>
    </>
  );
}
