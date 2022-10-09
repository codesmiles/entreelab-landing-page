const Button = (btnText, btnType) => {
  return (
    <>
      <button
        type={btnType}
        className={`bg-[#2979A0] text-white max-w-xs rounded-lg py-2 font-bold text-[16px] uppercase w-full`}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
