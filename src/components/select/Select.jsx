const Select = (props) => {
  const { id, className, defaultValue, value, onChangeEvent, children } = props;
  return (
    <>
      <select
        id={id}
        className={className}
        defaultValue={defaultValue}
        value={value}
        onChange={onChangeEvent}
      >
        {children}
      </select>
    </>
  );
};

export default Select;
