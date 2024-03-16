import React from "react";

const NavLink = ({ onClick, title }) => {
  return (
    <div className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer" onClick={onClick}>
      {title}
    </div>
  );
};

export default NavLink;
