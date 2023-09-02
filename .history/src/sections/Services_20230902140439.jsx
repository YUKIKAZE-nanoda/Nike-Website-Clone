import { services } from "../constants";
const Services = () => {
  return (
    <section className="max-container flex j
    ustify-center flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard kry={service.label} {...service}/>
      ))}
    </section>
  );
};

export default Services;
