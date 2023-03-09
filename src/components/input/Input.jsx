const Input = (props) => {
  const {
    type,
    id,
    name,
    value,
    onChangeEvent,
    className,
    placeholder,
    accept,
  } = props;

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
        accept={accept}
        required
      />
    </>
  );
};

export default Input;
