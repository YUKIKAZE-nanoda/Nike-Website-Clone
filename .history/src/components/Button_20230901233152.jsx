const Button = ({ label, iconUrl }) => {
  return (
    <button className="">
      {label}
      <img src={iconUrl} alt="arrow right now" className="ml-2 rounded-full w-5 " />
    </button>
  );
};

export default Button;
