import Image from "next/image";

const HrSoftware = () => {
  const Btn = () => {
    return (
      <button
        className={`border-2 capitalize border-[#3397C8] text-[#3397C8] px-5 py-1 rounded-xl`}
      >
        register
      </button>
    );
  };

  return (
    <section className={`w-11/12 mx-auto my-5 lg:flex lg:flex-row-reverse`}>
      <div
        className={`text-center lg:w-1/2 lg:text-left lg:pt-5 xl:pt-10 text-[#0F2D3C] `}
      >
        <h1 className={`font-bold mb-4 text-xl md:text-2xl`}>HR Software</h1>
        <p className={`leading-8`}>
          Recruiting is energy zapping and time-consuming. From creating job
          descriptions to automating candidate screening, to even interview
          scheduling, our HR Software stands out as very effective. Experience
          Modern International Payroll With Powerful Integrations & Unified
          Processes with EntréeLab HR
        </p>
        <div className="lg:mt-5 hidden lg:block">
          <a href="#">
            <Btn />
          </a>
        </div>
      </div>
      <div className={`flex justify-center lg:justify-start lg:w-1/2`}>
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
