import Head from "next/head";
import Image from "next/image";

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
        <section>
          <h1>why choose out products</h1>
          <div>
            <div>
              <Image src={``} width={``} height={``} />
              <h2>reliable</h2>
              <p>
                Our products are reliable and will work as intended with no
                unexpected problems. You can also trust that the we will keep
                your software up to date and fix any bugs that are found.
              </p>
            </div>
            <div>
              <Image src={``} width={``} height={``} />
              <h2>easy to use</h2>
              <p>
                Softwares do not have to be complicated. With our easy to use
                software, you can get started quickly and get the results you
                need. We make it easy for you to get started and to get the
                results you need.
              </p>
            </div>
            <div>
              <Image src={``} width={``} height={``} />
              <h2>great support</h2>
              <p>
                We provide great support to our clients. We are always available
                to answer any questions or concerns you may have, and we will do
                whatever it takes to make sure you are satisfied with our
                services.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h1>request a demo</h1>
          <form action="/" method="post">
            <div>
              <label htmlFor="firstName">first name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">last name</label>
              <input type="text" name="lastName" id="lasttName" />
            </div>
            <div>
              <label htmlFor="contact">phone no.</label>
              <input type="phone" name="contact" id="contact" />
            </div>
            <div>
              <label htmlFor="businessName">business name</label>
              <input type="text" name="businessName" id="businessName" />
            </div>
            <div>
              <label htmlFor="businessEmail">business email</label>
              <input type="email" name="businessEmail" id="businessEmail" />
            </div>
            <div>
              <label htmlFor="jobTitle">job title</label>
              <input type="text" name="jobTitle" id="jobTitle" />
            </div>
            <label htmlFor="additionalComment">additional comment</label>
            <textarea
              name="additionalComment"
              id="additionalComment"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">submit</button>
          </form>
        </section>
        <footer>
          <div>
            <h1>contact us</h1>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h1>find us on</h1>
            <ul>
              <li>
                <Image src={``} width={``} height={``} />
              </li>
              <li>
                <Image src={``} width={``} height={``} />
              </li>
              <li>
                <Image src={``} width={``} height={``} />
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}
