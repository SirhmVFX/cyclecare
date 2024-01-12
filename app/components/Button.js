const Button = ({ label, color, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`${color} button`}>
        {label}
      </button>
    </>
  );
};

export default Button;
