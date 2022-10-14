import Image from "next/image";
import { MainHeader } from "./sub-components/header";
const AboutEntreelab = () => {
  return (
    <section className="relative md:flex">
      <div>
        <div className="md:hidden absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
          <Image
            src={`/landing-page/mobile-about-us.svg`}
            width={`335px`}
            height={`220px`}
            className="h-full"
          />
        </div>
        <div className={`hidden md:block bg-[url("/landing-page/about-entreelab-jpg.jpg")] bg-cover bg-no-repeat`}>
          <Image
            src={`/landing-page/about-entreelab-png.png`}
            width={`574px`}
            height={`503px`}
            
          />
        </div>
      </div>
      <div className={`text-center bg-[#0F2D3C] text-white pt-20 px-4 pb-16 md:w-2/3 md:py-0 md:text-left lg:py-10 lg:px-24 xl:py-28 xl:px-32`}>
        <div className=" mb-5">
          <MainHeader text="About EntréeLab" />
        </div>
        <p className="leading-8 lg:w-11/12">
          We are a software development company in Nigeria that works with
          Enterprise systems, Schools and Companies. As a privately owned
          company, EntréeLab provides IT Consultancy, software design and
          development offering fully-fledged services for software development
          and engineering, empowering effective near-shore management to its
          clients.
        </p>
      </div>
    </section>
  );
};

export default AboutEntreelab;
