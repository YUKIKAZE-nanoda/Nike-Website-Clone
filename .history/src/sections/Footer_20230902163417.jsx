import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-between items-start 
      gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect size In Store .Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">{socialMedia.map((icon)}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
