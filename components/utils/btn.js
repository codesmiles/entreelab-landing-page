const Btn = ({ btnText, btnType, btnCss }) => {
  return (
    <>
      <button type={btnType} className={btnCss}>
        {btnText}
      </button>
    </>
  );
};

export default Btn;
