import { services } from "../constants";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <Service
      ))}
    </section>
  );
};

export default Services;
