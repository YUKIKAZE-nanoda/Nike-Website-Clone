import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span>Popular Products</span>
        </h2>
        <p>
          Experice your top-notch quality and style with our sought-after
          delections Discover a world of comfort design and value
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
