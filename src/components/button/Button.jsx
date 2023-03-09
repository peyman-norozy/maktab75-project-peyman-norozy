const Button = (props) => {
  const { type, className, innerText, onClickEvent, id } = props;

  return (
    <>
      <button type={type} id={id} className={className} onClick={onClickEvent}>
        {innerText}
      </button>
    </>
  );
};

export default Button;
