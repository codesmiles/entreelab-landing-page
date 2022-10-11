import Head from "next/head";
import Image from "next/image";
import Footer from "../components/landing-page/footer";
import RequestDemo from "../components/landing-page/requestDemo";
import WhyOurProduct from "../components/landing-page/whyOurProduct";
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
        <section>
          <div>
            <h1>accounting software</h1>
            <p>
              Our Accounting software is specially built to help businesses
              track financial statements, cash flow, invoicing and purchase
              orders. In addition, our solution comes with specialized
              functionalities for effective peer supervision and debt
              management. Our AI-powered chatbot also stands this app out as we
              have invested a lot of resources in making Accounting fun{" "}
            </p>
            <button>register</button>
          </div>
          <div>
            <Image src={``} width={``} height={``} />
          </div>
        </section>
        <section>
          <div>
            <h1>hr software</h1>
            <p>
              Recruiting is energy zapping and time-consuming. From creating job
              descriptions to automating candidate screening, to even interview
              scheduling, our HR Software stands out as very effective.
              Experience Modern International Payroll With Powerful Integrations
              & Unified Processes with EntréeLab HR
            </p>
            <button>register</button>
          </div>
          <div>
            <Image src={``} width={``} height={``} />
          </div>
        </section>
        <section>
          <div>
            <h1>School management software</h1>
            <p>
              The EntréeLab School Management Software is an e-learning
              application built as a central learning hub where multiple users
              have access to training and evaluation tools needed in one place.
              It is an effective LMS application developed with special
              consideration for the Nigerian market. The software is designed to
              help educators/schools, parents and most especially student
              monitor and evaluate development and performance in their
              activities by providing periodic digital charts in designated
              accounts.
            </p>
            <button>register</button>
          </div>
        </section>
        <WhyOurProduct/>
        <RequestDemo/>
        <Footer/>
      </main>
    </>
  );
}
