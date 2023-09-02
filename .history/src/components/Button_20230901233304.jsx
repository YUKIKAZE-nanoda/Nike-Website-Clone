const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items">
      {label}
      <img
        src={iconURL}
        alt="arrow right now"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
