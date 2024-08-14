import React, { useContext } from "react";
import { Order } from "../Ordercontext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

const Orders = () => {
  const {
    orders,
    handleRemove,
    increaseQuanity,
    decreaseQuanity,
    handlePlaceOrder,
  } = useContext(Order);
  const navigate = useNavigate();

  const total = orders.reduce(
    (acc, cur) => acc + +cur.price * +cur.quantity,
    0
  );

  return (
    <div className="max-w-[1200px] p-5 mx-auto overflow-auto">
      {orders.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">No Active Orders</h1>
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
            <caption>Orders</caption>
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
                  Action
                </th>
                <th scope="col" className="p-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {orders.map((order) => (
                <tr className="border" key={order.id}>
                  <th scope="row">{order.restarunt}</th>
                  <td>{order.name}</td>
                  <td className="flex p-2 justify-between">
                    <button onClick={() => increaseQuanity(order.id)}>
                      <MdAdd />
                    </button>
                    <span>{order.quantity}</span>
                    <button onClick={() => decreaseQuanity(order.id)}>
                      <FaMinus />
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleRemove(order.id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-center">
              <tr>
                <th scope="row" colSpan="4">
                  Total:
                </th>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
          <div className="flex justify-center mt-2">
            <button
              className="bg-green-300 font-bold rounded-lg px-2 py-1"
              onClick={() => handlePlaceOrder(orders)}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
