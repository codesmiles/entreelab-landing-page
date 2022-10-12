import Image from "next/image";
const HrSoftware = () => {
    return ( <section className={`text-[#0F2D3C] w-11/12 mx-auto`}>
        <div className={`text-center`}>
          <h1 className={`font-bold text-[20px]`}>HR Software</h1>
          <p className={`leading-8`}>
            Recruiting is energy zapping and time-consuming. From creating job
            descriptions to automating candidate screening, to even interview
            scheduling, our HR Software stands out as very effective.
            Experience Modern International Payroll With Powerful Integrations
            & Unified Processes with EntréeLab HR
          </p>
          <button className="hidden md:block">register</button>
        </div>
        <div className={`flex justify-center`}>
          <Image src={`/landing-page/mobile-HRscreen2-1.svg`} width={`330px`} height={`236.27px`} />
        </div>
      </section> );
}
 
export default HrSoftware;