

const Button = ({label,iconUrl}) => {
  return (
    <button className="">
        {label}
        <img src={iconUrl} alt="arrow right now" className=""/>
    </button>
  )
}

export default Button