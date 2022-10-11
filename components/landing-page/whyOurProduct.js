import Image from "next/image";

const WhyOurProduct = () => {
  const whyOurProductData = [
    {
      imgSrc: `/landing-page/partnership-1.svg`,
      headText: `reliable`,
      paraText: `Our products are reliable and will work as intended with no
        unexpected problems. You can also trust that the we will keep your
        software up to date and fix any bugs that are found.`,
    },
    {
      imgSrc: `/landing-page/partnership-1-1.svg`,
      headText: `easy to use`,
      paraText: `Softwares do not have to be complicated. With our easy to use
        software, you can get started quickly and get the results you need.
        We make it easy for you to get started and to get the results you
        need.`,
    },
    {
      imgSrc: `/landing-page/partnership-2-1.svg`,
      headText: `great support`,
      paraText: `We provide great support to our clients. We are always available to
        answer any questions or concerns you may have, and we will do
        whatever it takes to make sure you are satisfied with our services.`,
    },
  ];
  return (
    <section className="w-4/5 mx-auto text-[#121618] py-16 text-center">
      <h1 className={`font-bold capitalize text-[20px]`}>why choose our products</h1>
      <div className={`md:grid md:grid-cols-3 md:gap-x-10 mt-5 md:mt-10`}>
        {whyOurProductData.map((item, index) => {
          return (
            <div key={index} className={`pb-5`}>
              <Image src={item.imgSrc} width={`70`} height={`70`} className={`md:w-[100px] md:h-[100px]`}/>
              <h2 className="font-semibold text-[16px] text-[#0F2D3C] py-2 capitalize">
                {item.headText}
              </h2>
              <p>{item.paraText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyOurProduct;
