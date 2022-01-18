const InputText = ({ title, placeHolder, value, onChange }) => {
  return (
    <div className="form-control">
      <label>{title}</label>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
