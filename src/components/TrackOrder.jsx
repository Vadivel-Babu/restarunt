import React, { useContext } from "react";
import { Order } from "../Ordercontext";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const { placedOrder } = useContext(Order);
  const navigate = useNavigate();
  const total = placedOrder.reduce(
    (acc, cur) => acc + +cur.price * +cur.quantity,
    0
  );
  return (
    <div className="max-w-[1200px] p-5 mx-auto overflow-auto">
      {placedOrder.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">No Placed Orders</h1>
          <button
            className="bg-slate-300 px-2 py-1 mt-2"
            onClick={() => navigate("/")}
          >
            Go Restarunt
          </button>
        </div>
      ) : (
        <>
          <table className="border p-2 mx-auto">
            <caption className="font-bold text-3xl my-2 text-slate-400">
              Orders status : <span className="text-black">Shipping</span>
            </caption>
            <thead className="text-center">
              <tr className="border">
                <th scope="col" className="p-2">
                  Restarunt
                </th>
                <th scope="col" className="p-2">
                  Dish
                </th>
                <th scope="col" className="p-2">
                  Quantiy
                </th>
                <th scope="col" className="p-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {placedOrder.map((order) => (
                <tr className="border" key={order.id}>
                  <th scope="row">{order.restarunt}</th>
                  <td>{order.name}</td>
                  <td className="flex p-2 justify-center">{order.quantity}</td>

                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-center">
              <tr>
                <th scope="row" colSpan="3">
                  Total:
                </th>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
};

export default TrackOrder;
