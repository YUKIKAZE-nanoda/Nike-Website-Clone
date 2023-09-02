import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between
       items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensure Preminum comfor and style, our meticulously crafted footwaar is
          designed to elevate your experience, providing you with unmatched
          quality,innovation,and a touch od elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div>
        <img/>
      </div>
    </section>
  );
};

export default SuperQuality;
