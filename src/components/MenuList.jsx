import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Order } from "../Ordercontext";

const MenuList = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const { restarunts, orders, handleAdd } = useContext(Order);

  useEffect(() => {
    const restarunt = restarunts.find((restarunt) => restarunt.id === id);
    setMenu(restarunt.menu);
  }, [id]);
  return (
    <div className="max-w-[1200px] p-5 mx-auto">
      <div>
        <button
          className="bg-black text-white px-2 py-1 rounded-md"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className="flex gap-2">
          {menu.map((dish) => (
            <div
              className="p-2 border rounded-lg shadow-lg max-w-max mt-3"
              key={dish.id}
            >
              <img
                src={`/${dish.img}`}
                alt={dish.name}
                className="w-[200px] bg-slate-300"
              />
              <h1 className="font-bold">{dish.restarunt}</h1>
              <h2 className="font-semibold mt-2">{dish.name}</h2>
              <p className="max-w-[200px] mt-2">Price: {dish.price}</p>
              {!orders.some((order) => order.id == dish.id) ? (
                <button
                  onClick={() => {
                    const item = {
                      ...dish,
                      quantity: 1,
                    };
                    handleAdd(item);
                  }}
                  className="bg-yellow-600 px-2 py-1 rounded-lg mt-2"
                >
                  Add to orders
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/orders");
                  }}
                  className="bg-red-600 text-white px-2 py-1 rounded-lg mt-2"
                >
                  Go to Orders
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
