const express = require("express");
const cors = require("cors"); // Import the cors package
const bodyParser = require("body-parser"); // To parse JSON request bodies
const app = express();
const port = 8080;

// Use the CORS middleware
app.use(cors());

// Use bodyParser to parse JSON bodies
app.use(bodyParser.json());

// GET endpoint to retrieve the current cart items

// Define the products array
const products = [
  {
    id: 1,
    description:
      "A robot head with an unusually large eye and telescopic neck -- excellent for exploring high spaces.",
    name: "Large Cyclops",
    imageName: "head-big-eye.png",
    category: "Heads",
    price: 1220.5,
    discount: 0.2,
  },
  {
    id: 17,
    description: "A spring base - great for reaching high places.",
    name: "Spring Base",
    imageName: "base-spring.png",
    category: "Bases",
    price: 1190.5,
    discount: 0,
  },
  {
    id: 6,
    description:
      "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
    name: "Articulated Arm",
    imageName: "arm-articulated-claw.png",
    category: "Arms",
    price: 275,
    discount: 0,
  },
  {
    id: 2,
    description:
      "A friendly robot head with two eyes and a smile -- great for domestic use.",
    name: "Friendly Bot",
    imageName: "head-friendly.png",
    category: "Heads",
    price: 945.0,
    discount: 0.2,
  },
  {
    id: 3,
    description:
      "A large three-eyed head with a shredder for a mouth -- great for crushing light metals or shredding documents.",
    name: "Shredder",
    imageName: "head-shredder.png",
    category: "Heads",
    price: 1275.5,
    discount: 0,
  },
  {
    id: 16,
    description:
      "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
    name: "Single Wheeled Base",
    imageName: "base-single-wheel.png",
    category: "Bases",
    price: 1190.5,
    discount: 0.1,
  },
  {
    id: 13,
    description: "A simple torso with a pouch for carrying items.",
    name: "Pouch Torso",
    imageName: "torso-pouch.png",
    category: "Torsos",
    price: 785,
    discount: 0,
  },
  {
    id: 7,
    description:
      "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
    name: "Two Clawed Arm",
    imageName: "arm-dual-claw.png",
    category: "Arms",
    price: 285,
    discount: 0,
  },
  {
    id: 4,
    description: "A simple single-eyed head -- simple and inexpensive.",
    name: "Small Cyclops",
    imageName: "head-single-eye.png",
    category: "Heads",
    price: 750.0,
    discount: 0,
  },
  {
    id: 9,
    description:
      "An arm with a propeller -- good for propulsion or as a cooling fan.",
    name: "Propeller Arm",
    imageName: "arm-propeller.png",
    category: "Arms",
    price: 230,
    discount: 0.1,
  },
  {
    id: 15,
    description: "A rocket base capable of high speed, controlled flight.",
    name: "Rocket Base",
    imageName: "base-rocket.png",
    category: "Bases",
    price: 1520.5,
    discount: 0,
  },
  {
    id: 10,
    description: "A short and stubby arm with a claw -- simple, but cheap.",
    name: "Stubby Claw Arm",
    imageName: "arm-stubby-claw.png",
    category: "Arms",
    price: 125,
    discount: 0,
  },
  {
    id: 11,
    description:
      "A torso that can bend slightly at the waist and equipped with a heat gauge.",
    name: "Flexible Gauged Torso",
    imageName: "torso-flexible-gauged.png",
    category: "Torsos",
    price: 1575,
    discount: 0,
  },
  {
    id: 14,
    description: "A two-wheeled base with an accelerometer for stability.",
    name: "Double Wheeled Base",
    imageName: "base-double-wheel.png",
    category: "Bases",
    price: 895,
    discount: 0,
  },
  {
    id: 5,
    description:
      "A robot head with three oscillating eyes -- excellent for surveillance.",
    name: "Surveillance",
    imageName: "head-surveillance.png",
    category: "Heads",
    price: 1255.5,
    discount: 0,
  },
  {
    id: 8,
    description: "A telescoping arm with a grabber.",
    name: "Grabber Arm",
    imageName: "arm-grabber.png",
    category: "Arms",
    price: 205.5,
    discount: 0,
  },
  {
    id: 12,
    description: "A less flexible torso with a battery gauge.",
    name: "Gauged Torso",
    imageName: "torso-gauged.png",
    category: "Torsos",
    price: 1385,
    discount: 0,
  },
  {
    id: 18,
    description:
      "An inexpensive three-wheeled base only capable of slow speeds and can only function on smooth surfaces.",
    name: "Triple Wheeled Base",
    imageName: "base-triple-wheel.png",
    category: "Bases",
    price: 700.5,
    discount: 0,
  },
];

// Define an empty array to store the cart items
let cart = [];

// Define a GET endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Define a GET endpoint
app.get("/api/add/cart", (req, res) => {
  res.json(cart);
});

// POST endpoint to replace the cart with an array of products
app.post("/api/add/cart", (req, res) => {
  const productItems = req.body; // Get the array of product items from the request body

  // Validate that productItems is an array and not empty
  if (!Array.isArray(productItems) || productItems.length === 0) {
    return res.status(400).json({ error: "Invalid product data. Expected an array of products." });
  }

  // Validate each product in the array
  for (const productItem of productItems) {
    if (
      !productItem.id ||
      !productItem.name ||
      !productItem.price
    ) {
      return res.status(400).json({ error: "Each product must contain id, name, and price." });
    }
  }

  // Replace the cart array with the new array of products
  cart = [...productItems];

  // Respond with a success message and the updated cart
  res.status(201).json({ message: "Cart successfully replaced with new products", cart });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
