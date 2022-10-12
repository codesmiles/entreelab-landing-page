import Image from "next/image";
import Btn from "../utils/btn";
const SmSoftware = () => {
  const txtArr = [
    `The EntréeLab School Management Software is an e-learning application
    built as a central learning hub where multiple users have access to
    training and evaluation tools needed in one place. It is an effective
    LMS application developed with special consideration for the Nigerian
    market.`,
    `The software is designed to help educators/schools, parents and most
    especially student monitor and evaluate development and performance in
    their activities by providing periodic digital charts in designated
    accounts.`,
  ];
  return (
    <section className={`w-4/5 mx-auto`}>
      <div className={`text-center`}>
        <h1 className={`font-bold text-[20px] my-5`}>
          School management software
        </h1>
        {txtArr.map((item, index) => {
            return <p key={index} className="leading-7">{item}</p>;
            
        })}

        <a href="#">
            <Btn btnText="register"/>
        {/* <button class>register</button> */}
        </a>
      </div>
      <div>
        <Image src={`/landing-page/group46.svg`} width={`330`} height={`239.5`} />
      </div>
    </section>
  );
};

export default SmSoftware;
