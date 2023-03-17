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
    checked,
  } = props;

  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
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
