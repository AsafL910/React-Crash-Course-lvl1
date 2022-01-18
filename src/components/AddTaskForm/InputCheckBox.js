const InputCheckBox = ({ title, value, onChange }) => {
  return (
    <div className="form-control-check">
      <label>{title}</label>
      <input type="checkbox" value={value} onChange={onChange} />
    </div>
  );
};

export default InputCheckBox;
