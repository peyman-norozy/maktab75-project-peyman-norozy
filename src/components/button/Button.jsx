const Button = (props) => {
  const { type, className, innerText, onClickEvent } = props;

  return (
    <>
      <button type={type} className={className} onClick={onClickEvent}>
        {innerText}
      </button>
    </>
  );
};

export default Button;
