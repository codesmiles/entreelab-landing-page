import Image from "next/image";
import { MainHeader } from "./header";

const ContentSkeleton = (
  headerText = `accounting software`,
  para = [`This is a paragraph`],
  img = []
) => {
  const flexStyles = {
    rows: {
      forward: `w-11/12 mx-auto md:flex`,
      reverse: `w-11/12 mx-auto my-5 md:flex md:flex-row-reverse`,
    },
    justify: {
      start: `flex justify-center md:justify-start md:w-1/2`,
      end: `flex justify-center md:justify-end md:w-1/2`,
    },
  };
  return (
    <section className={flexStyles.rows.forward}>
      <div
        className={`text-[#0F2D3C] text-center md:w-1/2 md:text-left md:pt-5 xl:pt-10`}
      >
        <MainHeader text={headerText} />
        {para.map((content, index) => {
          return (
            <p key={index} className={`leading-8`}>
              {content}
            </p>
          );
        })}
        <div className="lg:mt-5 hidden lg:block">
          <a href="#">
            <RegBtn />
          </a>
        </div>
      </div>

      <div className={flexStyles.justify.end}>
        <div className={`md:hidden`}>
          <Image src={img[0]} placeholder="blur" alt={alt} />
        </div>
        <div className="hidden md:block">
          <Image src={img[1]} placeholder="blur" alt={alt} />
        </div>
      </div>
    </section>
  );
};

export default ContentSkeleton;
