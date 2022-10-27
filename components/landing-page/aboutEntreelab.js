import Image from "next/image";
import { MainHeader } from "./sub-components/header";
import aboutEntreelabDesktop from "../../public/landing-page/about-entreelab-png.png";
import aboutEntreelabMobile from "../../public/landing-page/about-entreelab-mobile.png";

const AboutEntreelab = () => {
  return (
    <section className="relative md:flex">
      <div className="relative md:w-2/5">
        <div className="md:hidden absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
          <Image
            src={aboutEntreelabMobile}
            placeholder="blur"
            className="h-full"
            alt={`About Entreelab image`}
          />
        </div>
        <div className={`hidden md:block bg-cover bg-no-repeat`}>
          <Image
            src={aboutEntreelabDesktop}
            layout="fill"
            placeholder="blur"
            alt={`About Entreelab image`}
          />
        </div>
      </div>
      <div className={`text-center bg-[#0F2D3C] text-white pt-20 px-4 pb-16 md:w-3/5 md:py-0 md:text-left lg:py-10 lg:px-24 xl:py-28 xl:px-32`}>
        <div className=" mb-5">
          <MainHeader text="About EntréeLab"/>
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
