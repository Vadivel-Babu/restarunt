import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RestaruntList from "./components/RestaruntList";
import MenuList from "./components/MenuList";
import Orders from "./components/Orders";
import TrackOrder from "./components/TrackOrder";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RestaruntList />} />
        <Route path="/menu/:id" element={<MenuList />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/trackorder" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
