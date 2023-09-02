import { services } from "../constants";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <Serv
      ))}
    </section>
  );
};

export default Services;
