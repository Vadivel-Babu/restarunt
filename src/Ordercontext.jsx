import { createContext, useState } from "react";

export const Order = createContext();

const OrderContext = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [placedOrder, setPlacedOrder] = useState([]);
  const restarunts = [
    {
      id: "1",
      name: "Mcdonalds",
      img: "mcd.png",
      menu: [
        {
          id: "3",
          restarunt: "Mcdonalds",
          name: "burger",
          price: "250",
          img: "burger.webp",
        },
        {
          id: "4",
          restarunt: "Mcdonalds",
          name: "French Fries",
          price: "150",
          img: "fries.jpg",
        },
      ],
    },
    {
      id: "2",
      name: "KFC",
      img: "kfc.png",
      menu: [
        {
          id: "5",
          restarunt: "KFC",
          name: "chicken",
          price: "250",
          img: "chicken.jpeg",
        },
        {
          id: "6",
          restarunt: "KFC",
          name: "Bucket chicken",
          price: "150",
          img: "bucket.jpg",
        },
      ],
    },
  ];
  function handleAdd(item) {
    setOrders([...orders, item]);
  }
  function handleRemove(id) {
    const filter = orders.filter((order) => order.id !== id);
    setOrders(filter);
  }
  function increaseQuanity(id) {
    const newOrder = orders.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    setOrders(newOrder);
  }
  function decreaseQuanity(id) {
    console.log(id);

    const newOrder = orders.map((item) => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    setOrders(newOrder);
  }
  function handlePlaceOrder(order) {
    setPlacedOrder(order);
    setOrders([]);
  }
  return (
    <Order.Provider
      value={{
        restarunts,
        orders,
        handleAdd,
        handleRemove,
        increaseQuanity,
        decreaseQuanity,
        handlePlaceOrder,
        placedOrder,
      }}
    >
      {children}
    </Order.Provider>
  );
};

export default OrderContext;
