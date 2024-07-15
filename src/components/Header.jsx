import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  return (
    <nav className="flex gap-40  justify-around items-center px-9 py-6 bg-slate-300 ">
      <div>
        <h1 className="font-extrabold text-2xl ">ASHISH .K</h1>
      </div>
      <ul className="flex gap-5 font-bold text-xl">
        <li>
          <AnchorLink offset={50} href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#skills">
            Skills
          </AnchorLink>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <AnchorLink offset={50} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
