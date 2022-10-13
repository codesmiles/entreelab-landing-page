const RegBtn = () => {
    return (
      <button
        className={`border-2 capitalize border-[#3397C8] text-[#3397C8] px-5 py-1 rounded-xl`}
      >
        register
      </button>
    );
  };
  const SubmitBtn = ({ btnText, btnType, btnCss }) => {
    return (
      <>
        <button type={btnType} className={btnCss}>
          {btnText}
        </button>
      </>
    );
  };
  // request demo
  const RequestDemo =({text})=>{
    return <button className={`bg-[#3397C8] text-white px-5 py-1 rounded-xl capitalize`}>{text}</button>
  }
  export{ SubmitBtn, RegBtn, RequestDemo};
  