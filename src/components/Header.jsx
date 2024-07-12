import { Link } from "react-router-dom";
const Header = () => {
  return (
    <main>
      <nav className="flex justify-between items-center px-9 py-6 bg-gray-300 ">
        <div>
          <h1 className="font-extrabold text-2xl">ASHISH .K</h1>
        </div>
        <ul className="flex gap-5 font-bold">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
