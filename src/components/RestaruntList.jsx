import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Order } from "../Ordercontext";

const RestaruntList = () => {
  const navigate = useNavigate();
  const { restarunts } = useContext(Order);
  return (
    <div className="max-w-[1200px] p-5 mx-auto">
      <div className="flex gap-2 flex-wrap">
        {restarunts.map((restarunt) => (
          <div
            className="p-2 border rounded-lg shadow-lg w-[220px]"
            key={restarunt.id}
          >
            <img
              src={restarunt.img}
              alt={restarunt.name}
              className="w-[200px] bg-white"
            />
            <h1 className="font-bold my-2">{restarunt.name}</h1>
            <button
              className="text-blue-500 bg-transparent"
              onClick={() => navigate(`/menu/${restarunt.id}`)}
            >
              see menu
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaruntList;
