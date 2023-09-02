const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
      src={imgURL}
      alt="c"
      />
    </div>
  );
};

export default ReviewCard;
