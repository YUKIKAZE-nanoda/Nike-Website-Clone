const ServiceCard = ({ imageURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] 
    w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="">
        <img src={imageURL} alt={label} width={24} height={24}/>
      </div>
    </div>
  );
};

export default ServiceCard;
