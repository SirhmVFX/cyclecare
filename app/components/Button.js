const Button = ({ label, color, onClick, type, disabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${color} button`}
        type={type}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
