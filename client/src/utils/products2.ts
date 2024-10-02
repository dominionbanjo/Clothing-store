interface Product {
  image: string;
  category: string;
  description: string;
  fit: string;
  price: string;
  sizes: string[];
  features: string[];
}

export const products: Product[] = [
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/dress1_vap7ck.png",
    category: "Women's Wear",
    description: "Timeless A-line Evening Dress",
    fit: "Ankle-length",
    price: "$109.99",
    sizes: ["S", "M", "L"],
    features: [
      "Elegant evening design",
      "Perfect for formal occasions",
      "Durable fabric with satin finish",
      "Available in multiple sizes",
      "Machine washable",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress2_zr0tey.png",
    category: "Women's Wear",
    description: "Floral Bloom Maxi Dress",
    fit: "Slim Fit",
    price: "$54.99",
    sizes: ["S", "M"],
    features: [
      "Floral print for a summer vibe",
      "Lightweight and breathable",
      "Adjustable spaghetti straps",
      "Perfect for casual outings",
      "Easy to care for, machine washable",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress3_lmm9sb.png",
    category: "Women's Wear",
    description: "Elegant Evening Gown",
    fit: "Fitted bodice",
    price: "$89.99",
    sizes: ["L", "XL"],
    features: [
      "Luxurious satin finish",
      "Figure-flattering design",
      "Side slit for added elegance",
      "Back zip closure",
      "Perfect for evening events",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/acc1_uabyrk.png",
    category: "Accessories",
    description: "Wide-Brim Bucket Hat",
    fit: "Any face shape",
    price: "$69.99",
    sizes: ["One size"],
    features: [
      "Wide brim for sun protection",
      "Lightweight and packable",
      "Ideal for outdoor adventures",
      "Breathable cotton material",
      "Stylish summer accessory",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc2_x9phmf.png",
    category: "Accessories",
    description: "Sophisticate Sun Hat",
    fit: "One size fits all",
    price: "$24.99",
    sizes: ["One size"],
    features: [
      "Sun protection with style",
      "Adjustable inner band for fit",
      "Foldable and easy to pack",
      "Chic accessory for the beach",
      "Durable and long-lasting",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc3_vmsqna.png",
    category: "Accessories",
    description: "Timeless Fedora",
    fit: "Any face shape",
    price: "$79.99",
    sizes: ["One size"],
    features: [
      "Classic fedora design",
      "Perfect for all seasons",
      "Breathable wool felt",
      "Adjustable inner band",
      "Suitable for casual and formal wear",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag1_duakgx.png",
    category: "Hand bag",
    description: "Bold Backpack",
    fit: "Roomy interior",
    price: "$129.99",
    sizes: ["One size"],
    features: [
      "Spacious main compartment",
      "Padded straps for comfort",
      "Multiple interior pockets",
      "Durable canvas construction",
      "Water-resistant finish",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/bag2_fm0zoj.png",
    category: "Hand bag",
    description: "Night Out Glam",
    fit: "Compact size",
    price: "$79.99",
    sizes: ["One size"],
    features: [
      "Compact and stylish",
      "Perfect for evening outings",
      "Gold-tone hardware",
      "Detachable shoulder strap",
      "Multiple interior compartments",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag3_sjmwn9.png",
    category: "Hand bag",
    description: "Hand bag",
    fit: "Spacious",
    price: "$49.99",
    sizes: ["One size"],
    features: [
      "Chic city style",
      "Roomy interior with pockets",
      "Comfortable carry handles",
      "Durable faux leather finish",
      "Easy to wipe clean",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men1.png",
    category: "Men's Wear",
    description: "Classic Fit T-Shirt",
    fit: "Regular Fit",
    price: "$29.99",
    sizes: ["M", "L", "XL"],
    features: [
      "Soft cotton material",
      "Crew neck design",
      "Perfect for everyday wear",
      "Machine washable",
      "Available in multiple colors",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men2.png",
    category: "Men's Wear",
    description: "Tailored Suit",
    fit: "Slim Fit",
    price: "$249.99",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Tailored to perfection",
      "Double-breasted jacket",
      "Slim fit for a modern look",
      "Premium wool blend",
      "Dry clean only",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men3.png",
    category: "Men's Wear",
    description: "Casual Shorts",
    fit: "Relaxed Fit",
    price: "$39.99",
    sizes: ["M", "L", "XL"],
    features: [
      "Comfortable cotton fabric",
      "Elastic waistband with drawstring",
      "Perfect for casual outings",
      "Multiple pockets for storage",
      "Machine washable",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/kids1.png",
    category: "Kids Wear",
    description: "Cartoon Graphic T-Shirt",
    fit: "Regular Fit",
    price: "$19.99",
    sizes: ["S", "M"],
    features: [
      "Playful cartoon print",
      "Soft cotton material",
      "Easy to pull on",
      "Durable stitching for active kids",
      "Machine washable",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/kids2.png",
    category: "Kids Wear",
    description: "Playful Overalls",
    fit: "Relaxed Fit",
    price: "$34.99",
    sizes: ["M", "L"],
    features: [
      "Durable denim material",
      "Adjustable shoulder straps",
      "Perfect for outdoor play",
      "Roomy fit for comfort",
      "Easy to wash",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/unisex1.png",
    category: "Unisex",
    description: "Oversized Hoodie",
    fit: "Relaxed Fit",
    price: "$59.99",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Soft fleece material",
      "Oversized for comfort",
      "Kangaroo pocket for added convenience",
      "Hood with adjustable drawstrings",
      "Perfect for all seasons",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/unisex2.png",
    category: "Unisex",
    description: "Comfy Joggers",
    fit: "Loose Fit",
    price: "$44.99",
    sizes: ["S", "M", "L"],
    features: [
      "Elastic waistband with drawstring",
      "Comfortable for lounging",
      "Soft cotton blend",
      "Tapered legs for a modern look",
      "Machine washable",
    ],
  },

  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png",
    category: "Women's Wear",
    description: "Elegant black gown for formal events.",
    fit: "Slim",
    price: "$129.99",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Elegant design",
      "Sleek black color",
      "Perfect for formal events",
    ],
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png",
    category: "Women's Wear",
    description: "Bold corset with matching skirt set.",
    fit: "Regular",
    price: "$89.99",
    sizes: ["XS", "S", "M", "L"],
    features: ["Bold and edgy", "Stylish corset", "Matching skirt"],
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png",
    category: "Women's Wear",
    description: "Chic corset paired with black skirt.",
    fit: "Tailored",
    price: "$79.99",
    sizes: ["S", "M", "L"],
    features: [
      "Trendy corset",
      "Classic black skirt",
      "Versatile for occasions",
    ],
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png",
    category: "Women's Wear",
    description: "Playful dress with pea pattern.",
    fit: "Loose",
    price: "$49.99",
    sizes: ["M", "L", "XL"],
    features: ["Pea pattern", "Casual style", "Comfortable fit"],
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png",
    category: "Women's Wear",
    description: "Bold red and black suit ensemble.",
    fit: "Tailored",
    price: "$179.99",
    sizes: ["S", "M", "L", "XL"],
    features: ["Sophisticated suit", "Red and black tones", "Modern design"],
  },
];
