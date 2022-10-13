import Image from "next/image";
import {RegBtn} from "./sub-components/btn";
const AcctSoftware = () => {
  const paragraphDataArr = [
    `Our Accounting software is specially built to help businesses
        track financial statements, cash flow, invoicing and purchase
        orders.`,
    `In addition, our solution comes with specialized
        functionalities for effective peer supervision and debt
        management.`,
    `Our AI-powered chatbot also stands this app out as we
        have invested a lot of resources in making Accounting fun`,
  ];
  return (
    <section className="w-11/12 mx-auto md:flex">
      <div className={`text-[#0F2D3C] text-center md:w-1/2 md:text-left`}>
        <h1 className={`capitalize font-bold mb-4 text-xl md:text-2xl`}>
          accounting software
        </h1>
        {paragraphDataArr.map((text, index) => {
          return (
            <p key={index} className={`leading-[27px]`}>
              {text}
            </p>
          );
        })}
        <div className="lg:mt-5 hidden md:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2">
      <div className={`md:hidden`}>
        <Image src={`/landing-page/mobile-accounting-software.svg`} width={`330px`} height={`234.8px`} />
      </div>
      <div className="hidden md:block">
        <Image src={`/landing-page/desktop-accounting-software.svg`} width={`513px`} height={`365px`} />
      </div>
      </div>
    </section>
  );
};

export default AcctSoftware;
