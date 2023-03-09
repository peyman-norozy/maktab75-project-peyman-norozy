const Button = (props) => {
  const { type, className, innerText } = props;

  return (
    <>
      <button type={type} className={className}>
        {innerText}
      </button>
    </>
  );
};

export default Button;
