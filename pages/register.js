import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const InputBoilerPlate = () => {
    const metaContent = "Entreelab accounting";
  const titleText = "Entreelab";
  const imgUrl = "/bg-register.jpg";
  const tagName = "businessName";
  const labelTitle = `business name`;
  const inputType = "text";
  const inputPlaceholder = `What's your business name`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={metaContent} />
      </Head>
      <main
        className={`min-w-screen min-h-screen bg-cover bg-center font-['Lato']`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div
          className={`text-black font-semibold capitalize text-[17px] pt-5 ml-5`}
        >
          entreelab accounting
        </div>

        <div className={`mx-auto max-w-md mt-20`}>
          <div className={` bg-[#F5F5F5] rounded-lg w-full py-10`}>
            <div className={`text-center pb-6`}>
              <Image src={`/logo.svg`} width={`61.63`} height={`50`} />
            </div>

            <form action={``} method={`post`} className={`grid justify-center`}>
              <div className="grid pb-5">
                <label htmlFor={tagName} className={` capitalize font-bold `}>
                  {labelTitle}
                </label>
                <input
                  type={inputType}
                  name={tagName}
                  className={`border-none rounded-lg py-2 pl-3 text-[15px] placeholder:text-[15px] w-80 max-w-full`}
                  placeholder={inputPlaceholder}
                />
              </div>
              <div className={`grid text-center`}>
                <button
                  type="submit"
                  className={`bg-[#2979A0] text-white max-w-xs rounded-lg py-2 font-bold text-[16px] uppercase w-full`}
                >
                  register
                </button>
                <span className="uppercase my-5">or</span>
                <button className={`border-2 border-[#2979A0] max-w-xs font-bold rounded-lg py-2 text-[#2979A0] uppercase `}>
                  <Link href={``}>
                    <a>login</a>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default InputBoilerPlate;
