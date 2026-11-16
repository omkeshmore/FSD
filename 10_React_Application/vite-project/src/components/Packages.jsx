import React from "react";

function Packages() {

  const packages = [
    {
      name: "Manali Tour",
      price: 12000,
      duration: "5 Days",
      details: "Hotel, Food and Sightseeing"
    },
    {
      name: "Goa Tour",
      price: 10000,
      duration: "4 Days",
      details: "Beach Activities and Hotel"
    },
    {
      name: "Kerala Tour",
      price: 15000,
      duration: "6 Days",
      details: "Houseboat and Sightseeing"
    }
  ];

  return (
    <section id="packages">
      <h2>Our Tour Packages</h2>

      <div className="container">

        {packages.map((item, index) => (
          <div className="card" key={index}>

            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>

            <p>Duration: {item.duration}</p>

            <p>{item.details}</p>

            <a href="#booking">
              <button>Book Now</button>
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Packages;