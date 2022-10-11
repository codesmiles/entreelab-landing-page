import data from "./sub-components/formData";
import Btn from "../utils/btn";

const RequestDemo = () => {
  return (
    <section className={`bg-[#3397C8] py-16 text-["Lato"]`}>
      <h1 className={`text-center text-[#07131A] font-bold text-[20px] mb-5`}>
        Request a Demo
      </h1>
      <form action="/" method="post" className="w-4/5 mx-auto">
        <div className={`md:grid md:grid-cols-3 md:gap-x-16 md:gap-y-5`}>

        {data.map((item, index) => {
          return (
            <div key={index} className={`mb-3`}>
              <label
                htmlFor={item.name}
                className={`block capitalize text-[#07131A] font-semibold`}
              >
                {item.text}
              </label>
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                placeholder={item.placeholder}
                className={`w-full rounded-lg py-1 pl-1 placeholder:capitalize placeholder:text-[#B7B7B7] placeholder:text-[15px]`}
                required
              />
            </div>
          );
        })}
        </div>

        <label
          htmlFor="additionalComment"
          className={`block text-[#07131A] font-semibold`}
        >
          Any additional comment
        </label>
        <textarea
          name="additionalComment"
          id="additionalComment"
          rows="4"
          placeholder="Add any additional comments/questions here"
          className={`w-full rounded-[10px] placeholder:text-[#B7B7B7] placeholder:text-[15px] pt-1 pl-2`}
        ></textarea>
        <div className={`flex justify-center mt-5`}>
        <Btn btnType={`submit`} btnText={`Submit`} btnCss={`bg-white px-4 py-2 rounded-[10px] text-[16]`}/>
        </div>
      </form>
    </section>
  );
};

export default RequestDemo;
