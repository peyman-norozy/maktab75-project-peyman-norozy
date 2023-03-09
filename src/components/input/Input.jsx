const Input = (props) => {
  const { type, id, name, value, onChangeEvent, className, placeholder } =
    props;
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeEvent}
        className={className}
      />
    </>
  );
};

export default Input;
