import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const bookings = [];

app.post("/api/check-availability", (req, res) => {
  const { date, time } = req.body;
  const unavailable = bookings.some(
    (booking) => booking.date === date && booking.time === time
  );
  const availableSlots = unavailable ? [] : ["Available"];
  res.json({ availableSlots });
});

app.get("/api/get-booking", (req, res) => {
  res.json(bookings);
});

app.post("/api/create-booking", (req, res) => {
  const { date, time, name, guests, contact } = req.body;
  bookings.push({ date, time, guests, name, contact });
  res.status(201).send("Booking created successfully.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
