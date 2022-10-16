import Image from "next/image";
import { RequestDemoBtn } from "./sub-components/btn";
import pattern from "../../public/landing-page/design1-2-jpg.jpg";
import pattern2 from "../../public/landing-page/design2-2.jpg";
import pattern3 from "../../public/landing-page/Rectangle-1.png"

const ContactUs = () => {
  return (
    <section className={`md:flex relative`}>
      <div className={`text-center pt-16 pb-32 px-5 md:px-20 md:py-2 lg:text-left lg:w-1/2 lg:py-32`}>
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
      <div className="hidden lg:block">
        <div className="absolute bottom-0 right-14 z-20">
          <Image
            src={pattern}
            placeholder="blur"
            width={`508px`}
            height={`576px`}
            onContextMenu={(e)=>{e.preventDefault()}} 
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <Image
            src={pattern2}
            placeholder="blur"
            width={`251.32px`}
            height={`423.94px`}
            onContextMenu={(e)=>{e.preventDefault()}} 
          />
        </div>
        <div className="absolute bottom-0 right-0 -z-10">
          <Image
            src={pattern3}
            // placeholder="blur"
            width={`419px`}
            height={`720px`}
            onContextMenu={(e)=>{e.preventDefault()}}
          />
        </div>
      </div>
    </section>

  );
};

export default ContactUs;
