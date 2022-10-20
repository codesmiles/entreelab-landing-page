import Image from "next/image";
import { RegBtn } from "./sub-components/btn";
import { MainHeader } from "./sub-components/header";
import { txtArr } from "./data/data";
import img from "../../public/landing-page/Group 46.png";

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
            src={img}
            width={`330`}
            height={`239.5`}
            placeholder="blur"
            alt={`School Management Software`}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={img}
            width={`516.78px`}
            height={`370px`}
            placeholder="blur"
            alt="School Management Software"
          />
        </div>
      </div>
    </section>
  );
};

export default SmSoftware;
