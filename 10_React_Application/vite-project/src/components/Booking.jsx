import React, { useState } from "react";

function Booking() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking Submitted Successfully!");

    console.log("Booking Details:", form);

    setForm({
      name: "",
      email: "",
      destination: "",
      date: ""
    });
  };

  return (
    <section id="booking">

      <h2>Book Your Trip</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
          required
        >
          <option value="">Select Destination</option>
          <option value="Manali">Manali</option>
          <option value="Goa">Goa</option>
          <option value="Kerala">Kerala</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Booking
        </button>

      </form>

    </section>
  );
}

export default Booking;