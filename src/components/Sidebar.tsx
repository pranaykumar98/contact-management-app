import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white-800 text-blue-600 p-4 border-2 border-black h-screen mt-[60px]">
      <ul>
        <li className="mb-2">
          <Link to="/" className="block p-2 hover:bg-gray-200 mt-5 text-lg">
            Contact
          </Link>
        </li>
        <li className="mb-2 mt-4">
          <Link
            to="/charts-maps"
            className="block p-2 hover:bg-gray-200 text-lg"
          >
            Charts and Maps
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
