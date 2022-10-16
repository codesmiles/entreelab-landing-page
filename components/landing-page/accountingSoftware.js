import Image from "next/image";
import { RegBtn } from "./sub-components/btn";
import { AcctParaDataArr } from "./data/data";
import img from "../../public/landing-page/mobile-accounting-software.png";
import img2 from "../../public/landing-page/desktop-accounting-software.png";

const AcctSoftware = () => {
  return (
    <section className="w-11/12 mx-auto md:flex">
      <div className={`text-[#0F2D3C] text-center md:w-1/2 md:text-left`}>
        <h1 className={`capitalize font-bold mb-4 text-xl md:text-2xl`}>
          accounting software
        </h1>
        {AcctParaDataArr.map((text, index) => {
          return (
            <p key={index} className={`leading-[27px]`}>
              {text}
            </p>
          );
        })}
        <div className="lg:mt-5 hidden lg:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2">
        <div className={`md:hidden`}>
          <Image
            src={img}
            placeholder="blur"
            width={`330px`}
            height={`234.8px`}
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={img2}
            placeholder="blur"
            width={`513px`}
            height={`365px`}
          />
        </div>
      </div>
    </section>
  );
};

export default AcctSoftware;
