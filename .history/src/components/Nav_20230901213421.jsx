import { headerLogo } from "../assets/images";
import {hamburger} from '../assets'
const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
