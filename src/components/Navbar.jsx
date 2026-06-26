import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Forms
        </h1>

        <div className="flex gap-6 text-white">
          <Link to="/" className="hover:text-pink-400 transition">
            Contact
          </Link>

          <Link to="/signup" className="hover:text-pink-400 transition">
            Signup
          </Link>

          <Link to="/feedback" className="hover:text-pink-400 transition">
            Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;