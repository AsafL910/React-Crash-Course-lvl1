const InputSubmit = ({ title, onClick }) => {
  return (
    <button className="btn btn-block" onClick={onClick}>
      {title}
    </button>
  );
};

export default InputSubmit;
