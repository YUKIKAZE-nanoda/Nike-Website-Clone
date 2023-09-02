import { headerLogo } from "../assets/images";
import { hambuger } from "../assets/images";
import { navLinks } from "../constants";
export const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item)=)}
        </ul>
      </nav>
    </header>
  );
};
