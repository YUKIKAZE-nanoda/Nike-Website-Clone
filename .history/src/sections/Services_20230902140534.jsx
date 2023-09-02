import { services } from "../constants";
import 
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=>(
        <ServiceCard kry={service.label} {...service}/>
      ))}
    </section>
  );
};

export default Services;
