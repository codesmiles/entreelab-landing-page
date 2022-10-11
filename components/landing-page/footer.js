import Image from "next/image";
import Header from "./sub-components/header";
import Link from "next/link";
const Footer = () => {
  const contactData = [
    { img: `/landing-page/phone.svg`, text: `01-454 5353, 07031081191` },
    {
      img: `/landing-page/location.svg`,
      text: `101 Randle Avenue,	Surulere Lagos`,
    },
    { img: `/landing-page/mail.svg`, text: `info@entreelab.org` },
  ];
  const findUsData = [
    `/landing-page/instagram.svg`,
    `/landing-page/twitter.svg`,
    `/landing-page/facebook.svg`,
  ];

  return (
    <footer
      className={`bg-[#0F2D3C]`}
    >
      <section className={` text-white pl-2 py-10 font-["Lato"] md:grid md:grid-cols-2 w-4/5 mx-auto`}>
        <div>
          <Header text={`contact us`} />
          {/* contactData logic */}
          <ul>
            {contactData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`flex justify-start my-5 text-[15px]`}
                >
                  <Image src={item.img} width={20} height={20} />
                  <p className={`ml-3 `}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* find us data */}
        <div className={`mt-10 md:mt-0`}>
          <Header text={`find us on`} />
          <ul className={`flex`}>
            {findUsData.map((item, index) => {
              return (
                <li key={index} className={`mr-5`}>
                  <Link href={``}>
                    <a>
                      <Image src={item} width={40} height={40} />
                    </a>
                  </Link>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
