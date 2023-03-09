const Input = (props) => {
  const { type, id, name, value, onChangeEvent, className } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChangeEvent}
        className={className}
      />
    </>
  );
};

export default Input;
