const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
      src={imgURL}
      alt={name}
      className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5"></div>
    </div>
  );
};

export default PopularProductCard;
