import airConditioner from "/assets/air-conditioner.jpeg";
import microwave from "/assets/microwave.jpeg";
import refrigerator from "/assets/refrigerator.jpeg";
import washingMachine from "/assets/washing-machine.jpeg";
import clothing from "/assets/shirts.jpeg";
import footwear from "/assets/footwear.jpeg";
import shoes from "/assets/womens-saree.jpg";
import laptop from "/assets/laptop.jpeg";
import phone from "/assets/phone.jpeg";
import headphones from "/assets/headphones.jpeg";
import tv from "/assets/tv.jpeg";
import dress from "/assets/dress.jpeg";

import womensDress1 from "/assets/womens-dress1.jpeg";
import womensJacket from "/assets/womens-jacket.jpeg";
import womensDress2 from "/assets/womens-dress2.jpeg";
import womensSandals from "/assets/womens-sandals.jpeg";
import womensKurtha from "/assets/womens-dress3.jpeg";

import menJacket from "/assets/men-jacket1.jpeg";
import menShirt1 from "/assets/men-shirt1.jpeg";
import menShirt2 from "/assets/men-shirt2.jpeg";
import menHoodie from "/assets/men-hoodie.jpeg";
import menShoes from "/assets/men-shoes.jpeg";

import tv1 from "/assets/tv1.jpeg";
import tv2 from "/assets/tv2.jpeg";
import tv3 from "/assets/tv3.jpeg";
import tv4 from "/assets/tv4.jpeg";

import phone1 from "/assets/phone1.jpeg";
import phone2 from "/assets/phone2.jpeg";
import phone3 from "/assets/phone3.jpeg";
import phone4 from "/assets/phone4.jpeg";

import appleWatch from "/assets/electronics1.jpeg";
import echoDot from "/assets/electronics2.jpeg";
import gopro from "/assets/electronics3.jpeg";
import canonDslr from "/assets/electronics4.jpeg";
import macbook from "/assets/laptop1.jpeg";

const categories = [
  {
    id: "other",
    title: "Up to 60% off | Amazon Launchpad",
    products: [
      {
        id: 0,
        img: "/assets/product1.jpeg",
        name: "Digital Stopwatch",
        price: "₹199",
        description:
          "Precision stopwatch with multiple lap memory and backlight display.",
      },
      {
        id: 1,
        img: "/assets/product2.jpg",
        name: "Bike",
        price: "₹2,00,000",
        description:
          "High-performance mountain bike with 21-speed gears and disc brakes.",
      },
      {
        id: 2,
        img: "/assets/product5.jpg",
        name: "Microwave",
        price: "₹20,999",
        description: "Convection microwave oven with pre-set cooking options.",
      },
      {
        id: 3,
        img: "/assets/product6.jpg",
        name: "Headset",
        price: "₹1,099",
        description:
          "Wireless Bluetooth headset with noise cancellation and long battery life.",
      },
      {
        id: 4,
        img: "/assets/product7.jpg",
        name: "Flower Pot",
        price: "₹299",
        description: "Elegant ceramic flower pot perfect for home decor.",
      },
      {
        id: 5,
        img: "/assets/product8.jpg",
        name: "Desk Decor Showpiece",
        price: "₹299",
        description: "Stylish decor piece to enhance your desk's aesthetic.",
      },
      {
        id: 6,
        img: "/assets/product9.jpg",
        name: "Panda Mobile Stand",
        price: "₹299",
        description: "Cute panda-shaped mobile stand with anti-slip grip.",
      },
      {
        id: 7,
        img: "/assets/product3.jpg",
        name: "Earbuds",
        price: "₹1999",
        description: "True wireless earbuds with deep bass and touch controls.",
      },
      {
        id: 8,
        img: "/assets/product4.jpg",
        name: "Men's Watch",
        price: "₹2,499",
        description:
          "Classic analog watch with water resistance and leather strap.",
      },
    ],
  },
  {
    id: "appliances",
    title: "Appliances for your home | Up to 55% off",
    products: [
      {
        id: "1",
        img: airConditioner,
        name: "Air Conditioners",
        price: "₹29,299",
        description:
          "Energy-efficient split AC with turbo cooling and inverter technology.",
      },
      {
        id: "2",
        img: microwave,
        name: "Microwaves",
        price: "₹20,999",
        description:
          "Smart microwave with auto-cook menus and child lock safety.",
      },
      {
        id: "3",
        img: refrigerator,
        name: "Refrigerators",
        price: "₹66,999",
        description:
          "Double-door fridge with frost-free technology and large storage capacity.",
      },
      {
        id: "4",
        img: washingMachine,
        name: "Washing Machines",
        price: "₹49,999",
        description:
          "Fully automatic front-load washing machine with quick wash mode.",
      },
    ],
    link: "See more",
  },
  {
    id: "fashion",
    title: "Under ₹499 | Pocket-friendly fashion",
    products: [
      {
        id: "5",
        img: clothing,
        name: "Clothing",
        price: "₹2,099",
        description: "Stylish and comfortable cotton T-shirts for daily wear.",
      },
      {
        id: "7",
        img: footwear,
        name: "Footwear",
        price: "₹5,099",
        description: "Trendy sneakers with durable sole and stylish design.",
      },
      {
        id: "8",
        img: dress,
        name: "Womens dress",
        price: "₹8,499",
        description:
          "Elegant evening dress with lace detailing and perfect fit.",
      },
      {
        id: "8",
        img: shoes,
        name: "Men's Shoes",
        price: "₹8,499",
        description:
          "Leather formal shoes with cushioned insole for all-day comfort.",
      },
    ],
    link: "See all offers",
  },
  {
    id: "electronics",
    title: "Electronics | Grab the best deals",
    products: [
      {
        id: "9",
        img: laptop,
        name: "Laptops",
        price: "₹83,999",
        description:
          "High-performance laptop with Intel i7 processor and 16GB RAM.",
      },
      {
        id: "10",
        img: phone,
        name: "Smartphones",
        price: "₹58,799",
        description:
          "Latest 5G smartphone with AMOLED display and fast charging.",
      },
      {
        id: "11",
        img: headphones,
        name: "Headphones",
        price: "₹16,799",
        description:
          "Over-ear headphones with deep bass and long battery life.",
      },
      {
        id: "12",
        img: tv,
        name: "Smart TVs",
        price: "₹99,999",
        description: "55-inch 4K UHD Smart TV with built-in streaming apps.",
      },
    ],
    link: "Shop now",
  },
  {
    id: "gadgets",
    title: "Trending Gadgets | Hot Deals",
    products: [
      {
        id: "13",
        img: "/assets/SmartPhone.jpg",
        name: "SmartPhone",
        price: "₹1,699",
        description:
          "Feature-packed smartphone with dual cameras and fast processor.",
      },
      {
        id: "14",
        img: "/assets/powerbank.jpg",
        name: "Powerbank",
        price: "₹8,299",
        description:
          "10,000mAh powerbank with fast charging and dual USB ports.",
      },
      {
        id: "15",
        img: "/assets/product6.jpg",
        name: "Headset",
        price: "₹6,699",
        description: "Noise-cancelling Bluetooth headset with built-in mic.",
      },
      {
        id: "16",
        img: "/assets/product4.jpg",
        name: "Men's Watch",
        price: "₹12,499",
        description:
          "Elegant wristwatch with stainless steel finish and water resistance.",
      },
    ],
    link: "Explore gadgets",
  },
  {
    id: "lifestyle",
    title: "Lifestyle Essentials | Best Offers",
    products: [
      {
        id: "17",
        img: "/assets/product5.jpg",
        name: "Microwave",
        price: "₹20,999",
        description:
          "Compact microwave oven with multiple power levels and defrost option.",
      },
      {
        id: "18",
        img: "/assets/product7.jpg",
        name: "Flower Pot",
        price: "₹2,499",
        description:
          "Decorative flower pot ideal for indoor and outdoor plants.",
      },
      {
        id: "19",
        img: "/assets/product8.jpg",
        name: "Desk Decor Showpiece",
        price: "₹3,299",
        description: "Modern decor showpiece perfect for home or office.",
      },
      {
        id: "20",
        img: "/assets/product9.jpg",
        name: "Panda Mobile Stand",
        price: "₹1,299",
        description: "Adorable panda-shaped mobile stand with sturdy base.",
      },
    ],
    link: "Shop lifestyle",
  },
  {
    id: "fashion",
    title: "Under ₹499 | Pocket-friendly fashion",
    products: [
      {
        id: "5",
        img: clothing,
        name: "Clothing",
        price: "₹2,099",
        description: "Stylish and comfortable cotton T-shirts for daily wear.",
      },
      {
        id: "7",
        img: footwear,
        name: "Footwear",
        price: "₹5,099",
        description: "Trendy sneakers with durable sole and stylish design.",
      },
      {
        id: "8",
        img: womensDress1,
        name: "Floral Summer Dress",
        price: "₹4,999",
        description:
          "A stylish summer dress with floral patterns, perfect for casual outings or beach days.",
      },
      {
        id: "9",
        img: womensJacket,
        name: "Denim Jacket",
        price: "₹6,499",
        description:
          "Trendy denim jacket with a sleek fit, ideal for casual and semi-formal wear.",
      },
      {
        id: "10",
        img: womensDress2,
        name: "Casual Dress",
        price: "₹3,999",
        description:
          "Comfortable and stylish dress, perfect for everyday wear with a modern touch.",
      },
      {
        id: "11",
        img: womensSandals,
        name: "Women's Sandals",
        price: "₹5,499",
        description:
          "Stylish and comfortable sandals for daily wear, suitable for both casual and formal outfits.",
      },
      {
        id: "12",
        img: womensKurtha,
        name: "Women's Kurtha",
        price: "₹5,499",
        description:
          "Beautifully designed kurtha with intricate patterns, perfect for festive and formal occasions.",
      },
    ],
    link: "See all offers",
  },
  {
    id: "men",
    title: "Men's Fashion | Up to 50% off",
    products: [
      {
        id: "13",
        img: menJacket,
        name: "Leather Jacket",
        price: "₹10,499",
        description:
          "High-quality leather jacket with a rugged look, perfect for a stylish winter outfit.",
      },
      {
        id: "14",
        img: menShirt1,
        name: "Plaid Shirt",
        price: "₹3,299",
        description:
          "Comfortable plaid shirt with a soft fabric, ideal for casual and weekend wear.",
      },
      {
        id: "15",
        img: menShirt2,
        name: "Men's Shirts",
        price: "₹4,999",
        description:
          "Elegant cotton shirt with a tailored fit, perfect for office and formal events.",
      },
      {
        id: "16",
        img: menHoodie,
        name: "Men's Hoodie",
        price: "₹6,499",
        description:
          "Warm and stylish hoodie, perfect for winter wear with a relaxed fit.",
      },
      {
        id: "17",
        img: menShoes,
        name: "Men's Shoes",
        price: "₹5,499",
        description:
          "Comfortable and trendy shoes, suitable for both casual and semi-formal occasions.",
      },
    ],
    link: "Shop now",
  },
  {
    id: "electronics",
    title: "Electronics | Grab the best deals",
    products: [
      {
        id: "18",
        img: tv1,
        name: "Samsung QLED TV",
        price: "₹1,09,999",
        description:
          "55-Inch QLED TV with Quantum Dot technology for vibrant colors and sharp contrast.",
      },
      {
        id: "19",
        img: tv2,
        name: "Sony Bravia OLED",
        price: "₹1,34,999",
        description:
          "Premium OLED TV with stunning visuals, Dolby Vision, and superior sound quality.",
      },
      {
        id: "20",
        img: tv3,
        name: "LG 65-Inch UHD",
        price: "₹99,999",
        description:
          "65-Inch UHD Smart TV with HDR10 and AI ThinQ for a smart viewing experience.",
      },
      {
        id: "21",
        img: tv4,
        name: "TCL Smart TV",
        price: "₹37,499",
        description:
          "Affordable Roku Smart TV with Full HD resolution and built-in streaming apps.",
      },
      {
        id: "22",
        img: appleWatch,
        name: "Apple Watch Series 8",
        price: "₹32,999",
        description:
          "Smartwatch with advanced health tracking, fitness features, and always-on display.",
      },
      {
        id: "23",
        img: echoDot,
        name: "Amazon Echo Dot",
        price: "₹4,499",
        description:
          "Smart speaker with Alexa voice assistant for hands-free control and music streaming.",
      },
      {
        id: "24",
        img: gopro,
        name: "GoPro Hero 11",
        price: "₹41,999",
        description:
          "Action camera with 5.3K video recording, waterproof design, and HyperSmooth stabilization.",
      },
      {
        id: "25",
        img: canonDslr,
        name: "Canon DSLR Camera",
        price: "₹1,09,999",
        description:
          "Professional-grade DSLR camera with high-resolution sensor and 4K video recording.",
      },
      {
        id: "26",
        img: macbook,
        name: "MacBook Pro 14",
        price: "₹1,64,999",
        description:
          "High-performance laptop with M2 chip, Retina display, and long battery life.",
      },
    ],
    link: "Shop now",
  },
  {
    id: "smartphones",
    title: "Smartphones | Top Deals",
    products: [
      {
        id: "27",
        img: phone1,
        name: "iPhone 15 Pro",
        price: "₹1,09,999",
        description:
          "Latest iPhone with A17 Bionic chip, improved battery life, and ProMotion display.",
      },
      {
        id: "28",
        img: phone2,
        name: "Google Pixel 8",
        price: "₹82,999",
        description:
          "AI-powered smartphone with superior camera capabilities and a clean Android experience.",
      },
      {
        id: "29",
        img: phone3,
        name: "OnePlus 12",
        price: "₹74,999",
        description:
          "Powerful flagship phone with Snapdragon processor and fast charging support.",
      },
      {
        id: "30",
        img: phone4,
        name: "Xiaomi Mi 12",
        price: "₹64,999",
        description:
          "High-performance smartphone with a sleek design and outstanding battery life.",
      },
    ],
    link: "See more",
  },
];

export default categories;
