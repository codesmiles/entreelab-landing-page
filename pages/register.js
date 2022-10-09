import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const InputBoilerPlate = () => {
  const title = "Entreelab";
  const imgUrl = "/bg-register.jpg";
  const placeholderText = `What's your business name`;
  const name = "businessName";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Entreelab accounting" />
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

        <div className={`flex justify-center`}>
          <div className={` bg-[#F5F5F5] px-16 py-10 rounded-lg`}>
            <div className={`text-center pb-6`}>
              <Image src={`/logo.svg`} width={`61.63`} height={`50`} />
            </div>

            <form action={``} method={`post`} className={``}>
              <div className="grid pb-5">
                <label htmlFor={name} className={` capitalize font-bold `}>
                  business name
                </label>
                <input
                  type={`text`}
                  name={name}
                  className={`border-none rounded-lg py-2 pl-3 text-[15px] placeholder:text-[15px] w-80 max-w-full`}
                  placeholder={placeholderText}
                />
              </div>
              <div className={`grid text-center`}>
                <button
                  type="submit"
                  className={`bg-[#2979A0] text-white w-80 rounded-lg py-2 font-bold text-[16px] uppercase`}
                >
                  register
                </button>
                <span className="uppercase my-5">or</span>
                <button className={`border-2 border-[#2979A0] rounded-lg py-2 text-[#2979A0] uppercase font-bold`}>
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
