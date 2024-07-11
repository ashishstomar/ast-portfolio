const Header = () => {
  return (
    <main>
      <nav className="flex justify-between items-center px-9 py-6 bg-gray-300 ">
        <div>
          <h1 className="font-extrabold text-2xl">ASHISH .K</h1>
        </div>
        <ul className="flex gap-5 font-bold">
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
