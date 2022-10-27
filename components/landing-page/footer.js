import Image from "next/image";
import {FooterHeader} from "./sub-components/header";
import Link from "next/link";
import { ftContactData,ftFindUsData } from "./data/data";
const Footer = () => {

  return (
    <footer
      className={`bg-[#0F2D3C]`}
      id="footer"
    >
      <section className={` text-white pl-2 py-10 font-["Lato"] md:grid md:grid-cols-2 w-11/12 mx-auto`}>
        <div>
          <FooterHeader text={`contact us`} />
          {/* contactData logic */}
          <ul>
            {ftContactData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`flex justify-start my-5 text-[15px]`}
                >
                  <Image src={item.img} width={20} height={20} alt={``}/>
                  <p className={`ml-3 `}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* find us data */}
        <div className={`mt-10 md:mt-0`}>
          <FooterHeader text={`find us on`} />
          <ul className={`flex`}>
            {ftFindUsData.map((item, index) => {
              return (
                <li key={index} className={`mr-5`}> 
                    <a href={item.url}>
                      <Image src={item.dir} width={40} height={40} alt={``}/>
                    </a>
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
