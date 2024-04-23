import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex gap-6 justify-around bg-gray-900 py-4 text-white">
      <Link to="/" className="border  px-4 py-2 rounded-lg">
        Home
      </Link>
      <Link to="/users" className="border  px-4 py-2 rounded-lg">
        Users
      </Link>
    </div>
  );
}

export default Navbar