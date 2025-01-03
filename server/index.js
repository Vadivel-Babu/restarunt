import express, { json, response } from "express";
import cors from "cors";
//import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(json());

let bookings = [];

app.post("/api/check-availability", (req, res) => {
  const { date, time } = req.body;
  const unavailable = bookings.some(
    (booking) => booking.date === date && booking.time === time
  );
  const availableSlots = unavailable ? ["Un Available"] : ["Available"];
  res.json({ availableSlots });
});

app.get("/api/get-booking", (req, res) => {
  res.json(bookings);
});

app.delete("/api/delete-booking", (req, res) => {
  const { id } = req.body;

  bookings.splice(id, 1);
  res.send("deleted successfully");
});

app.post("/api/create-booking", (req, res) => {
  const { date, time, name, guests, contact } = req.body;
  const data = {
    date,
    time,
    name,
    guests,
    contact,
  };
  bookings.push(data);
  res.status(201).send("Booking created successfully.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
