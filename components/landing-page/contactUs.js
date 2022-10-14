import Image from "next/image";
import NavBar from "./navbar";
import { RequestDemoBtn } from "./sub-components/btn";
const ContactUs = () => {
  return (
    <div className="">
    <NavBar/>
    <section className={`md:flex relative`}>
      <div className={`text-center py-32 px-5 md:text-left lg:px-20 md:w-1/2`}>
        <h1 className={`font-extrabold capitalize text-2xl mb-5`}>
          solutions for every business
        </h1>
        <p className={`text-[17px] leading-8`}>
          We have positioned ourselves to be the number one stop gap for every
          software solution of your need
        </p>
        <div className={"my-10"}>
          <a href="#">
            <RequestDemoBtn text={"contact us"}/>
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute bottom-0 right-14 z-10">
          <Image
            src={`/landing-page/design1-2-jpg.jpg`}
            width={`508px`}
            height={`576px`}
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={`/landing-page/design2-2.jpg`}
            width={`251.32px`}
            height={`423.94px`}
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUs;
