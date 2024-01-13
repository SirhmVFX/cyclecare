const Button = ({ label, color, onClick, type }) => {
  return (
    <>
      <button onClick={onClick} className={`${color} button`} type={type}>
        {label}
      </button>
    </>
  );
};

export default Button;
