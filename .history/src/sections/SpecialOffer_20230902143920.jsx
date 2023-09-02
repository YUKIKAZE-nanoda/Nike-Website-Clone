import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special </span>
           Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensure Preminum comfor and style, our meticulously crafted footwaar is
          designed to elevate your experience, providing you with unmatched
          quality,innovation,and a touch od elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possible designed to fullfill your unquie desires . surpassing the loftiest expectations . your journey with 
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
