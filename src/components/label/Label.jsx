const Label = (props) => {
  const { htmlFor, className, innerText } = props;
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {innerText}
      </label>
    </>
  );
};

export default Label;
