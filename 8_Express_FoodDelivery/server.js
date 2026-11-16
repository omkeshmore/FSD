const express = require('express');

const app = express();

app.use(express.json());

// Restaurant details
const restaurants = [
    {
        id: 1,
        name: "Pizza Hut",
        location: "Nashik"
    },
    {
        id: 2,
        name: "Dominos",
        location: "Mumbai"
    },
    {
        id: 3,
        name: "McDonald's",
        location: "Pune"
    }
];

// Menu details
const menus = {
    1: ["Pizza", "Burger", "Pasta"],
    2: ["Cheese Pizza", "Garlic Bread", "Sandwich"],
    3: ["Burger", "French Fries", "Cold Coffee"]
};

// Store orders
let orders = [];
let orderId = 1;


// Route 1: Display Restaurants
app.get('/restaurants', (req, res) => {

    res.json(restaurants);

});


// Route 2: View Restaurant Menu
app.get('/restaurants/:id/menu', (req, res) => {

    const id = req.params.id;

    if (!menus[id]) {
        return res.status(404).send("Restaurant not found");
    }

    res.json({
        restaurant: restaurants.find(r => r.id == id).name,
        menu: menus[id]
    });

});


// Route 3: Place Order
app.post('/orders', (req, res) => {

    const { customer, restaurantId, item } = req.body;

    if (!customer || !menus[restaurantId] ||
        !menus[restaurantId].includes(item)) {

        return res.status(400).send("Invalid order details");
    }

    const order = {
        id: orderId++,
        customer: customer,
        restaurantId: restaurantId,
        item: item,
        status: "Preparing"
    };

    orders.push(order);

    res.status(201).json({
        message: "Order placed successfully",
        order: order
    });

});


// Route 4: Check Order Status
app.get('/orders/:id/status', (req, res) => {

    const id = Number(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).send("Order not found");
    }

    res.json({
        orderId: order.id,
        customer: order.customer,
        item: order.item,
        status: order.status
    });

});


// Route 5: Handle Invalid Routes
app.use((req, res) => {

    res.status(404).send("404 - Page Not Found");

});


// Start Server
app.listen(3000, () => {

    console.log("Food Delivery Server running on port 3000");

});

// Route1_GET_Display Restaurants
// http://localhost:3000/restaurants

// Route2_GET_View Restaurant Menu
// http://localhost:3000/restaurants/1/menu

// Route3_Post_Place Order
// http://localhost:3000/orders
// {
//     "customer": "Rahul",
//     "restaurantId": 1,
//     "item": "Pizza"
// }


// Route4_GET_Check Order Status
// http://localhost:3000/orders/1/status

// Route5
// http://localhost:3000/invalid