const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
      <ul className="flex gap-6 font-medium text-gray-700">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;