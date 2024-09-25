interface Product {
  image: string;
  category: string;
  description: string;
  fit: string;
  price: string;
}

interface ProductsByCategory {
  category: string;
  products: Product[];
}

export const products: ProductsByCategory[] = [
  {
    category: "Women",
    products: [
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/dress1_vap7ck.png",
        category: "Women's Wear",
        description: "Timeless A-line Evening Dress",
        fit: "Ankle-length",
        price: "$109.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress2_zr0tey.png",
        category: "Women's Wear",
        description: "Floral Bloom Maxi Dress",
        fit: "Slim Fit",
        price: "$54.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/dress3_lmm9sb.png",
        category: "Women's Wear",
        description: "Elegant Evening Gown",
        fit: "Flowing",
        price: "$89.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093107/acc1_uabyrk.png",
        category: "Accessories",
        description: "Wide-Brim Bucket Hat",
        fit: "Any face shape",
        price: "$69.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc2_x9phmf.png",
        category: "Accessories",
        description: "Sophisticate Sun Hat",
        fit: "One size fit all",
        price: "$24.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/acc3_vmsqna.png",
        category: "Accessories",
        description: "Timeless Fedora",
        fit: "Any face shape",
        price: "$79.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag1_duakgx.png",
        category: "Hand bag",
        description: "Bold backpack",
        fit: "Roomy interior",
        price: "$129.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093106/bag2_fm0zoj.png",
        category: "Hand bag",
        description: "Night Out Glam",
        fit: "Compact size",
        price: "$79.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/bag3_sjmwn9.png",
        category: "Hand bag",
        description: "Urban Chick Handbag",
        fit: "Spacious",
        price: "$49.99",
      },
    ],
  },
  {
    category: "Men",
    products: [
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men1.png",
        category: "Men's Wear",
        description: "Classic Fit T-Shirt",
        fit: "Regular Fit",
        price: "$29.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men2.png",
        category: "Men's Wear",
        description: "Tailored Suit",
        fit: "Slim Fit",
        price: "$249.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/men3.png",
        category: "Men's Wear",
        description: "Casual Shorts",
        fit: "Relaxed Fit",
        price: "$39.99",
      },
    ],
  },
  {
    category: "Kids",
    products: [
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/kids1.png",
        category: "Kids' Wear",
        description: "Cartoon Graphic T-Shirt",
        fit: "Regular Fit",
        price: "$19.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/kids2.png",
        category: "Kids' Wear",
        description: "Playful Overalls",
        fit: "Relaxed Fit",
        price: "$34.99",
      },
    ],
  },
  {
    category: "Unisex",
    products: [
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/unisex1.png",
        category: "Unisex",
        description: "Oversized Hoodie",
        fit: "Relaxed Fit",
        price: "$59.99",
      },
      {
        image:
          "https://res.cloudinary.com/dcmg4skhv/image/upload/v1727093105/unisex2.png",
        category: "Unisex",
        description: "Comfy Joggers",
        fit: "Loose Fit",
        price: "$44.99",
      },
    ],
  },
];
