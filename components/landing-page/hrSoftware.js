import Image from "next/image";
import { RegBtn } from "./sub-components/btn";
import { MainHeader } from "./sub-components/header";
import img1 from "../../public/landing-page/mobile-HRscreen2-1.png";
import img2 from "../../public/landing-page/desktop-HRscreen2-1.png";


const HrSoftware = () => {
  return (
    <section className={`w-11/12 mx-auto my-5 md:flex md:flex-row-reverse`}>
      <div
        className={`text-center text-[#0F2D3C]  md:w-1/2 md:text-left md:pt-5 xl:pt-10 `}
      >
        <MainHeader text="HR Software" />
        <p className={`leading-8`}>
          Recruiting is energy zapping and time-consuming. From creating job
          descriptions to automating candidate screening, to even interview
          scheduling, our HR Software stands out as very effective. Experience
          Modern International Payroll With Powerful Integrations & Unified
          Processes with EntréeLab HR
        </p>
        <div className="lg:mt-5 hidden lg:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>
      <div className={`flex justify-center md:justify-start md:w-1/2`}>
        <div className={`md:hidden`}>
          <Image
            src={img1}
            width={`330px`}
            height={`236.27px`}
            placeholder="blur"
            alt={`HR software`}
          />
        </div>
        <div className={`hidden md:block`}>
          <Image
            src={img2}
            width={`516.78px`}
            height={`370px`}
            placeholder={"blur"}
            alt={`HR software`}
          />
        </div>
      </div>
    </section>
  );
};

export default HrSoftware;
