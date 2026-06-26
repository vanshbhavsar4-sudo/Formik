import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/40 backdrop-blur-xl border-b border-orange-500/20 sticky top-0 z-50 shadow-lg shadow-red-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Vansh
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-orange-400 hover:scale-110 transition-all duration-300"
          >
            Contact
          </Link>

          <Link
            to="/signup"
            className="hover:text-orange-400 hover:scale-110 transition-all duration-300"
          >
            Signup
          </Link>

          <Link
            to="/feedback"
            className="hover:text-orange-400 hover:scale-110 transition-all duration-300"
          >
            Feedback
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;