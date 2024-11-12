interface Product {
  image: string;
  category: string;
  subCategory: string;
  description: string;
  fit: string;
  price: string;
  sizes: string[];
  features: string[];
  user: string;
}

export const products: Product[] = [
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/dress1_vap7ck.png",
    category: "Women",
    subCategory: "Women's Wear",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress2_zr0tey.png",
    category: "Women",

    subCategory: "Women's Wear",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress3_lmm9sb.png",
    category: "Women",

    subCategory: "Women's Wear",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/acc1_uabyrk.png",
    category: "Women",

    subCategory: "Accessories",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc2_x9phmf.png",
    category: "Women",

    subCategory: "Accessories",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc3_vmsqna.png",
    category: "Women",

    subCategory: "Accessories",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag1_duakgx.png",
    category: "Women",

    subCategory: "Hand Bag",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/bag2_fm0zoj.png",
    category: "Women",

    subCategory: "Hand Bag",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag3_sjmwn9.png",
    category: "Women",

    subCategory: "Hand Bag",
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
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png",
    category: "Women",

    subCategory: "Women's Wear",
    description: "Elegant black gown for formal events.",
    fit: "Slim",
    price: "$129.99",
    sizes: ["S", "M", "L", "XL"],
    features: [
      "Elegant design",
      "Sleek black color",
      "Perfect for formal events",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png",
    category: "Women",

    subCategory: "Women's Wear",
    description: "Bold corset with matching skirt set.",
    fit: "Regular",
    price: "$89.99",
    sizes: ["XS", "S", "M", "L"],
    features: ["Bold and edgy", "Stylish corset", "Matching skirt"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png",
    category: "Women",

    subCategory: "Women's Wear",
    description: "Chic corset paired with black skirt.",
    fit: "Tailored",
    price: "$79.99",
    sizes: ["S", "M", "L"],
    features: [
      "Trendy corset",
      "Classic black skirt",
      "Versatile for occasions",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png",
    category: "Women",

    subCategory: "Women's Wear",
    description: "Playful dress with pea pattern.",
    fit: "Loose",
    price: "$49.99",
    sizes: ["M", "L", "XL"],
    user: "671f6bc47a31a6222f12738d",
    features: ["Pea pattern", "Casual style", "Comfortable fit"],
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png",
    category: "Women",

    subCategory: "Women's Wear",
    description: "Bold red and black suit ensemble.",
    fit: "Tailored",
    price: "$179.99",
    sizes: ["S", "M", "L", "XL"],
    features: ["Sophisticated suit", "Red and black tones", "Modern design"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-Bags/Blue%20Women's%20Handbag/1.png",
    category: "Women",

    subCategory: "Hand Bag",
    description: "Blue Women's Handbag",
    fit: "Spacious",
    price: "$49.99",
    sizes: ["One size"],
    features: [
      "Vibrant blue color",
      "Multiple compartments for organization",
      "Fashionable design",
      "Durable material",
      "Easy to wipe clean",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/1.png",
    category: "Women",

    subCategory: "Hand Bag",
    description: "Heshe Women's Leather Bag",
    fit: "Sophisticated",
    price: "$129.99",
    sizes: ["One size"],
    features: [
      "Luxurious leather finish",
      "Durable craftsmanship",
      "Classic design",
      "Comfortable to carry",
      "Ample storage space",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png",
    category: "Women",

    subCategory: "Hand Bag",
    description: "Prada Women Bag",
    fit: "Luxurious",
    price: "$599.99",
    sizes: ["One size"],
    features: [
      "Elegant Prada design",
      "High-end craftsmanship",
      "Statement piece",
      "Spacious interior",
      "Iconic designer logo",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/1.png",
    category: "Women",

    subCategory: "Hand Bag",
    description: "White Faux Leather Backpack",
    fit: "Practical",
    price: "$39.99",
    sizes: ["One size"],
    features: [
      "Trendy white design",
      "Ample storage space",
      "Sleek and modern look",
      "Comfortable to wear",
      "Durable faux leather material",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/1.png",
    category: "Women",

    subCategory: "Hand Bag",
    description: "Women Handbag Black",
    fit: "Versatile",
    price: "$59.99",
    sizes: ["One size"],
    features: [
      "Timeless black color",
      "Functional design",
      "Durable and stylish",
      "Ample storage compartments",
      "Easy to pair with any outfit",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png",
    category: "Women",

    subCategory: "Accessories",
    description: "IWC Ingenieur Automatic Steel",
    fit: "Any wrist size",
    price: "$4999.99",
    sizes: ["One size"],
    features: [
      "Durable stainless steel case",
      "Automatic movement",
      "5 year warranty",
      "Ships in 1 week",
      "No return policy",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png",
    category: "Women",

    subCategory: "Accessories",
    description: "Rolex Cellini Moonphase",
    fit: "Any wrist size",
    price: "$15999.99",
    sizes: ["One size"],
    features: [
      "Moon phase complication",
      "Elegant craftsmanship",
      "2 year warranty",
      "Ships in 1-2 business days",
      "60 days return policy",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png",
    category: "Women",

    subCategory: "Accessories",
    description: "Rolex Datejust Women",
    fit: "Any wrist size",
    price: "$10999.99",
    sizes: ["One size"],
    features: [
      "Timeless design",
      "Date complication",
      "6 months warranty",
      "Ships in 3-5 business days",
      "90 days return policy",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png",
    category: "Women",

    subCategory: "Accessories",
    description: "Watch Gold for Women",
    fit: "Any wrist size",
    price: "$799.99",
    sizes: ["One size"],
    features: [
      "Gold-plated case",
      "Chic design",
      "2 year warranty",
      "Ships in 1 month",
      "No return policy",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/1.png",
    category: "Women",

    subCategory: "Accessories",
    description: "Women's Wrist Watch",
    fit: "Any wrist size",
    price: "$129.99",
    sizes: ["One size"],
    features: [
      "Simple yet elegant design",
      "Comfortable strap",
      "1 month warranty",
      "Ships in 3-5 business days",
      "90 days return policy",
    ],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png",
    category: "Men",
    subCategory: "Men's Shirts",
    description: "Blue & Black Check Men's Shirt",
    fit: "Regular fit",
    price: "$29.99",
    sizes: ["S", "M", "L", "XL"],
    features: ["High-quality fabric", "Classic check pattern", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png",
    category: "Men",
    subCategory: "Men's Shirts",
    description: "Gigabyte Aorus Men Tshirt",
    fit: "Regular fit",
    price: "$24.99",
    sizes: ["M", "L", "XL"],
    features: ["Cool Aorus logo", "Sleek design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png",
    category: "Men",
    subCategory: "Men's Shirts",
    description: "Classic Men's Plaid Shirt",
    fit: "Regular fit",
    price: "$34.99",
    sizes: ["M", "L", "XL"],
    features: ["Classic plaid pattern", "Timeless design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png",
    category: "Men",
    subCategory: "Men's Shirts",
    description: "Men's Short Sleeve Casual Shirt",
    fit: "Regular fit",
    price: "$19.99",
    sizes: ["S", "M", "L"],
    features: ["Short sleeves", "Breezy and stylish", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png",
    category: "Men",
    subCategory: "Men's Shirts",
    description: "Men's Classic Check Shirt",
    fit: "Regular fit",
    price: "$27.99",
    sizes: ["M", "L", "XL"],
    features: ["Stylish check pattern", "Classic and versatile", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png",
    category: "Men",
    subCategory: "Men's Shoes",
    description: "Nike Air Jordan 1 - Red & Black",
    fit: "Regular fit",
    price: "$149.99",
    sizes: ["8", "9", "10", "11", "12"],
    features: ["Iconic design", "High-performance features", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png",
    category: "Men",
    subCategory: "Men's Shoes",
    description: "Nike Performance Baseball Cleats",
    fit: "Regular fit",
    price: "$79.99",
    sizes: ["8", "9", "10", "11"],
    features: ["Maximum traction", "Stability and support", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png",
    category: "Men",
    subCategory: "Men's Shoes",
    description: "Puma Future Rider Trainers",
    fit: "Regular fit",
    price: "$89.99",
    sizes: ["8", "9", "10", "11", "12"],
    features: ["Retro style", "Modern comfort", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png",
    category: "Men",
    subCategory: "Men's Shoes",
    description: "Sports Sneakers - Off White & Red",
    fit: "Regular fit",
    price: "$69.99",
    sizes: ["8", "9", "10", "11"],
    features: ["Stylish design", "Comfortable fit", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Brown Leather Belt Watch",
    fit: "Regular fit",
    price: "$89.99",
    sizes: [],
    features: ["Stylish design", "Genuine leather strap", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Longines Master Collection Watch",
    fit: "Regular fit",
    price: "$1499.99",
    sizes: [],
    features: ["Timeless design", "High precision", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Rolex Cellini Date - Black Dial",
    fit: "Regular fit",
    price: "$8999.99",
    sizes: [],
    features: ["Classic design", "Date complication", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Rolex Cellini Moonphase Watch",
    fit: "Regular fit",
    price: "$12999.99",
    sizes: [],
    features: ["Moon phase complication", "Exquisite design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Rolex Datejust Watch",
    fit: "Regular fit",
    price: "$10999.99",
    sizes: [],
    features: ["Iconic design", "Date window", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png",
    category: "Men",
    subCategory: "Men's Watches",
    description: "Rolex Submariner Dive Watch",
    fit: "Regular fit",
    price: "$13999.99",
    sizes: [],
    features: ["Durable design", "Water resistant", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },

  {
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    category: "Unisex",
    subCategory: "Fragrances",
    description: "Elegant fragrance with grapefruit and sandalwood notes.",
    fit: "Regular fit",
    price: "$129.99",
    sizes: [],
    features: ["Elegant fragrance", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    category: "Unisex",
    subCategory: "Fragrances",
    description: "Luxurious floral scent with ylang-ylang and rose.",
    fit: "Regular fit",
    price: "$89.99",
    sizes: [],
    features: ["Floral notes", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
    category: "Unisex",
    subCategory: "Fragrances",
    description: "Vibrant fruity fragrance with mango and jasmine notes.",
    fit: "Regular fit",
    price: "$69.99",
    sizes: [],
    features: ["Fruity scent", "Low stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    category: "Unisex",
    subCategory: "Fragrances",
    description: "Captivating floral scent with tuberose and jasmine.",
    fit: "Regular fit",
    price: "$79.99",
    sizes: [],
    features: ["Floral fragrance", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/1.png",
    category: "Unisex",
    subCategory: "Skincare",
    description: "Natural hand soap enriched with nourishing super leaves.",
    fit: "Regular fit",
    price: "$8.99",
    sizes: [],
    features: ["Personal care", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/1.png",
    category: "Unisex",
    subCategory: "Skincare",
    description: "Luxurious body wash with shea butter hydration.",
    fit: "Regular fit",
    price: "$12.99",
    sizes: [],
    features: ["Moisturizing body wash", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/1.png",
    category: "Unisex",
    subCategory: "Skincare",
    description: "Body and face lotion for long-lasting moisture.",
    fit: "Regular fit",
    price: "$9.99",
    sizes: [],
    features: ["Men's care", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/1.png",
    category: "Unisex",
    subCategory: "Glasses",
    description: "Classic black sunglasses with UV protection.",
    fit: "Regular fit",
    price: "$29.99",
    sizes: [],
    features: ["UV protection", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/1.png",
    category: "Unisex",
    subCategory: "Glasses",
    description: "Timeless sunglasses with neutral frame.",
    fit: "Regular fit",
    price: "$24.99",
    sizes: [],
    features: ["Versatile design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/1.png",
    category: "Unisex",
    subCategory: "Glasses",
    description: "Bold green and black stylish sunglasses.",
    fit: "Regular fit",
    price: "$34.99",
    sizes: [],
    features: ["Stylish design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/1.png",
    category: "Unisex",
    subCategory: "Glasses",
    description: "Colorful glasses for fun occasions.",
    fit: "Regular fit",
    price: "$19.99",
    sizes: [],
    features: ["Playful design", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
  {
    image:
      "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/1.png",
    category: "Unisex",
    subCategory: "Glasses",
    description: "Classic sunglasses with essential UV protection.",
    fit: "Regular fit",
    price: "$22.99",
    sizes: [],
    features: ["UV protection", "In stock"],
    user: "671f6bc47a31a6222f12738d",
  },
];
