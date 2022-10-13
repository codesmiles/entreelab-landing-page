import Head from "next/head";
import Link from "next/link";
import SubmitBtn from "./utils/btn";
import ImgLogo from "./utils/imgLogo";
import TxtLogo from "./utils/logo";


const RegisterUser = () => {
    const metaContent = "Entreelab accounting";
    const titleText = "Entreelab Accounting | Register";
    const imgUrl = "/user/bg-register.jpg";
    const tagName = "businessName";
          const labelTitle = `business name`;
    const inputType = "text";
    const inputPlaceholder = `What's your business name?`;

    return (  
        <>
          <Head>
            <title>{titleText}</title>
            <meta name="description" content={metaContent} />
          </Head>
          <main
            className={`min-w-screen min-h-screen bg-cover bg-center font-['Lato'] pb-10`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <TxtLogo />

            <div className={`mx-auto max-w-md`}>
              <div className={` bg-[#F5F5F5] rounded-lg w-full py-10`}>
                <div className={`text-center pb-6`}>
                  <ImgLogo />
                </div>

                <form
                  action={``}
                  method={`post`}
                  className={`grid justify-center`}
                >
                  <div className="grid pb-5">
                    <label for={tagName} className={` capitalize font-bold `}>
                      {labelTitle}
                    </label>
                    <input
                      type={inputType}
                      name={tagName}
                      className={`border-none rounded-lg py-2 pl-3 text-[15px] placeholder:text-[15px] w-80 max-w-full`}
                      placeholder={inputPlaceholder}
                    />
                  </div>

                  <div className="grid pb-5">
                    <label
                      for={`Business-email`}
                      className={` capitalize font-bold `}
                    >
                      {`Business email`}
                    </label>
                    <input
                      type={`email`}
                      name={`Business-email`}
                      className={`border-none rounded-lg py-2 pl-3 text-[15px] placeholder:text-[15px] w-80 max-w-full`}
                      placeholder={`Enter your business email?`}
                    />
                  </div>

                  <div className="grid pb-5">
                    <label for={`pwd`} className={` capitalize font-bold `}>
                      {`password`}
                    </label>

                    <input
                      type={`password`}
                      name={`pwd`}
                      className={`border-none rounded-lg py-2 pl-3 text-[15px] placeholder:text-[15px] w-80 max-w-full`}
                      placeholder={`Enter a strong password`}
                    />
                  </div>

                  {/* button */}
                  <div className={`grid text-center`}>
                    <SubmitBtn
                      btnType="submit"
                      btnText="register"
                      btnCss={`bg-[#2979A0] text-white max-w-xs rounded-lg py-2 font-bold text-[16px] uppercase w-full`}
                    />

                    <span className="uppercase my-5">or</span>

                    <Link href="">
                      <SubmitBtn
                        btnText={`login`}
                        btnCss={`border-2 border-[#2979A0] max-w-xs font-bold rounded-lg py-2 text-[#2979A0] uppercase`}
                      />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </>
    );
}
 
export default RegisterUser;
