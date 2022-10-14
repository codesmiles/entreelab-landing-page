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
          />
        </div>
        <div className="hidden md:block min-w-screen min-h-screen">
          <Image
            src={`/landing-page/desktop-about-us.svg`}
            width={`574px`}
            height={`574px`}
          />
        </div>
      </div>
      <div className={`text-center bg-[#0F2D3C] text-white pt-20 px-4 pb-16 md:w-1/2`}>
        <div className=" mb-5">
          <MainHeader text="About EntréeLab" />
        </div>
        <p className="leading-8">
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
