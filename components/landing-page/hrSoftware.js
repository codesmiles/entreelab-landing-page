import Image from "next/image";
import RegBtn from "./sub-components/regBtn";
import {MainHeader} from "./sub-components/header"
const HrSoftware = () => {
  
  return (
    <section className={`w-11/12 mx-auto my-5 md:flex md:flex-row-reverse`}>
      <div
        className={`text-center text-[#0F2D3C]  md:w-1/2 md:text-left md:pt-5 xl:pt-10 `}
      >
        <MainHeader text="HR Software"/>
        <p className={`leading-8`}>
          Recruiting is energy zapping and time-consuming. From creating job
          descriptions to automating candidate screening, to even interview
          scheduling, our HR Software stands out as very effective. Experience
          Modern International Payroll With Powerful Integrations & Unified
          Processes with EntréeLab HR
        </p>
        <div className="lg:mt-5 hidden md:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>
      <div className={`flex justify-center md:justify-start md:w-1/2`}>
        <div className={`md:hidden`}>
          <Image
            src={`/landing-page/mobile-HRscreen2-1.svg`}
            width={`330px`}
            height={`236.27px`}
          />
        </div>
        <div className={`hidden md:block`}>
          <Image
            src={`/landing-page/desktop-HRscreen2-1.svg`}
            width={`516.78px`}
            height={`370px`}
          />
        </div>
      </div>
    </section>
  );
};

export default HrSoftware;
