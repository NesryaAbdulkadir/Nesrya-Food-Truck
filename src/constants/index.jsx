import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About Us",
    path: "#about",
  },
  {
    name: "Menu",
    path: "#menu",
  },
  {
    name: "Location",
    path: "#location",
  },
];

export const menuItems = [
  {
    name: "Burger",
    image: "/burger.jpg",
    ingredients: [
      "Bread",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickle",
      "Mayo",
      "Ketchup",
      "Mustard",
    ],
    price: "12$",
  },
  {
    name: "Taco",
    image: "/taco.jpg",
    ingredients: [
      "Tortilla",
      "Ground Beef or Chicken",
      "Lettuce",
      "Tomato",
      "Cheese",
      "Sour Cream",
      "Salsa",
    ],
    price: "10$",
  },
  {
    name: "Burrito",
    image: "/burrito.jpg",
    ingredients: [
      "Large Tortilla",
      "Rice",
      "Beans",
      "Cheese",
      "Sour Cream",
      "Guacamole",
      "Salsa",
      "Meat (Beef, Chicken, or Pork)",
    ],
    price: "13$",
  },
  {
    name: "Hot Dog",
    image: "/hotdog.jpg",
    ingredients: [
      "Hot Dog Bun",
      "Hot Dog Sausage",
      "Ketchup",
      "Mustard",
      "Relish",
      "Onions",
    ],
    price: "10$",
  },
  {
    name: "Milk Shake",
    image: "/milkshake.jpg",
    ingredients: [
      "Ice Cream",
      "Milk",
      "Flavoring (Chocolate, Vanilla, Strawberry)",
      "Whipped Cream",
      "Cherry (for topping)",
    ],
    price: "11$",
  },
  {
    name: "Crisp Chicken",
    image: "/crispchicken.jpg",
    ingredients: [
      "Chicken thighs",
      "Salt",
      "Black pepper",
      "Garlic powder",
      "Onion powder",
      "Paprika",
      "yogurt",
      ,
    ],
    price: "12$",
  },
];

export const InstagramContent = [
  {
    image: "/insta1.jpg",
  },
  {
    image: "/insta2.jpg",
  },
  {
    image: "/insta3.jpg",
  },
];

export const socialMedias = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/nesryafoodtruck",
    icon: <Facebook />,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/nesryafoodtruck",
    icon: <Instagram />,
  },
  {
    name: "Twitter",
    path: "https://www.twitter.com/nesryafoodtruck",
    icon: <Twitter />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/company/nesrya-food-truck",
    icon: <Linkedin />,
  },
];

export const markers = [
  {
    geocode: [48.8566, 2.3522],
    place: "Paris",
    title: "Nesrya Food Truck",
  },
];
