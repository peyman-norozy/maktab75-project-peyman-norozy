const Input = (props) => {
  const {
    type,
    id,
    name,
    value,
    onChangeEvent,
    onInputEvent,
    className,
    placeholder,
    accept,
    maxlength,
  } = props;

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        maxLength={maxlength}
        placeholder={placeholder}
        onChange={onChangeEvent}
        onInput={onInputEvent}
        className={className}
        accept={accept}
        required
      />
    </>
  );
};

export default Input;
