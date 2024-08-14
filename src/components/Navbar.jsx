import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Order } from "../Ordercontext";

const Navbar = () => {
  const { orders } = useContext(Order);
  return (
    <nav className="bg-yellow-100">
      <div className="p-5 max-w-[1200px] mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-md md:text-2xl">Restarunts</h1>
        </NavLink>
        <div className="flex gap-2">
          <NavLink to="/orders">
            <h3 className="text-sm md:text-xl p-3 bg-yellow-500 rounded-lg">
              {orders.length} orders
            </h3>
          </NavLink>
          <NavLink to="/trackorder">
            <h3 className="text-sm md:text-xl p-3 bg-yellow-300 rounded-lg">
              Track orders
            </h3>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
