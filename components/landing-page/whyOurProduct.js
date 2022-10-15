import Image from "next/image";
import { whyOurProductData } from "./data/data";
const WhyOurProduct = () => {
  
  return (
    <section className="w-4/5 mx-auto text-[#121618] py-16 text-center">
      <h1 className={`font-bold capitalize text-xl md:text-2xl`}>why choose our products</h1>
      <div className={`md:grid md:grid-cols-3 md:gap-x-5  mt-5 md:mt-10`}>
        {whyOurProductData.map((item, index) => {
          return (
            <div key={index} className={`pb-5`}>
              <Image src={item.imgSrc} width={`70`} height={`70`} className={`md:w-[100px] md:h-[100px]`}/>
              <h2 className="font-semibold text-[16px] text-[#0F2D3C] py-2 capitalize">
                {item.headText}
              </h2>
              <p className={`lg:px-5`}>{item.paraText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyOurProduct;
