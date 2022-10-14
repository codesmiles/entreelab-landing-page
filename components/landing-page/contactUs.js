import Image from "next/image";
import { RequestDemoBtn } from "./sub-components/btn";
const ContactUs
 = () => {
    return ( <section className={`py-32 px-5`}>
        <div className={`text-center`}>
          <h1 className={`font-extrabold capitalize text-2xl mb-5`}>solutions for every business</h1>
          <p className={`text-[17px] leading-8`}>
            We have positioned ourselves to be the number one stop gap for
            every software solution of your need
          </p>
          <div className={"my-10"}>
          <a href="#">
            <RequestDemoBtn text={"contact us"}></RequestDemoBtn>
          </a>
          </div>
        </div>
        <div>
          <Image src={``} width={``} height={``} />
          <Image src={``} width={``} height={``} />
        </div>
      </section> );
}
 
export default ContactUs
;