import Image from "next/image";
import RequestDemo from "./requestDemo";
const ContactUs
 = () => {
    return ( <section className={`py-36 px-5`}>
        <div className={`text-center`}>
          <h1 className={`font-extrabold capitalize text-2xl`}>solutions for every business</h1>
          <p className={`text-[17px] leading-8`}>
            We have positioned ourselves to be the number one stop gap for
            every software solution of your need
          </p>
          <a href="#">
            <RequestDemo text={"contact us"}></RequestDemo>
          </a>
        </div>
        <div>
          <Image src={``} width={``} height={``} />
          <Image src={``} width={``} height={``} />
        </div>
      </section> );
}
 
export default ContactUs
;