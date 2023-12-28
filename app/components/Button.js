const Button = ({ label, color }) => {
  return (
    <>
      <button className={`${color} button`}>{label}</button>
    </>
  );
};

export default Button;
