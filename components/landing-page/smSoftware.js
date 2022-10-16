import Image from "next/image";
import { RegBtn } from "./sub-components/btn";
import { MainHeader } from "./sub-components/header";
import { txtArr } from "./data/data";


const SmSoftware = () => {
  return (
    <section className={`w-11/12 mx-auto md:flex `}>
      <div className={`text-center md:text-left md:w-1/2 text-[#0F2D3C] `}>
        <MainHeader text="School Management Software" />

        {txtArr.map((item, index) => {
          return (
            <p key={index} className="leading-7">
              {item}
            </p>
          );
        })}
        <div className="lg:mt-5 hidden lg:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="md:hidden">
          <Image
            src={`/landing-page/group46.svg`}
            width={`330`}
            height={`239.5`}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={`/landing-page/group46.svg`}
            width={`516.78px`}
            height={`370px`}
          />
        </div>
      </div>
    </section>
  );
};

export default SmSoftware;
