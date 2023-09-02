const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      justify-center border-2 min-h-screen
       p-2 max-container "
    >
      <div
        className="relative xl:w-2/5 
      flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
      >
        <p>Our Summer Collection</p>
        <h1><span>The New Arrival</span></h1>
      </div>
    </section>
  );
};

export default Hero;
