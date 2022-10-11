import data from "./sub-components/formData";

const RequestDemo = () => {
  return (
    <section className={`bg-[#3397C8] py-10 text-["Lato"]`}>
      <h1 className={`text-center text-[#07131A] font-bold text-[20px] mb-5`}>
        Request a Demo
      </h1>
      <form action="/" method="post" className="w-4/5 mx-auto">
        {data.map((item, index) => {
          return (
            <div key={index} className={`mb-5`}>
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

        <label
          htmlFor="additionalComment"
          className={`block text-[#07131A] font-semibold`}
        >
          Any additional comment
        </label>
        <textarea
          name="additionalComment"
          id="additionalComment"
          //   cols="30"
          rows="4"
          placeholder="Add any additional comments/questions here"
          className={`w-full rounded-lg placeholder:text-[#B7B7B7] placeholder:text-[15px] pt-1 pl-3`}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default RequestDemo;
