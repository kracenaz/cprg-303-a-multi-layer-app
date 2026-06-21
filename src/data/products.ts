export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: { uri: string };
  sizes: { label: string; available: boolean }[];
};

export const PRODUCTS: Product[] = [
  {
    id: "nike-gato-n7",
    name: "Nike Gato N7",
    category: "Men's Shoes",
    price: 160,
    image: { uri: "https://picsum.photos/seed/gaton7/400/400" },
    sizes: [
      { label: "M 5 / W 6.5", available: true },
      { label: "M 6 / W 7.5", available: false },
      { label: "M 7 / W 8.5", available: true },
      { label: "M 8 / W 9.5", available: true },
      { label: "M 9 / W 10.5", available: true },
      { label: "M 10 / W 11.5", available: false },
    ],
  },
  {
    id: "air-max-270",
    name: "Nike Air Max 270",
    category: "Men's Shoes",
    price: 150,
    image: { uri: "https://picsum.photos/seed/airmax270/400/400" },
    sizes: [
      { label: "M 7", available: true },
      { label: "M 8", available: true },
      { label: "M 9", available: false },
      { label: "M 10", available: true },
      { label: "M 11", available: true },
    ],
  },
  {
    id: "pegasus-41",
    name: "Nike Pegasus 41",
    category: "Men's Running Shoes",
    price: 130,
    image: { uri: "https://picsum.photos/seed/pegasus41/400/400" },
    sizes: [
      { label: "M 7", available: true },
      { label: "M 8", available: true },
      { label: "M 9", available: true },
      { label: "M 10", available: false },
    ],
  },
  {
    id: "dunk-low",
    name: "Nike Dunk Low",
    category: "Shoes",
    price: 115,
    image: { uri: "https://picsum.photos/seed/dunklow/400/400" },
    sizes: [
      { label: "M 6", available: true },
      { label: "M 7", available: false },
      { label: "M 8", available: true },
      { label: "M 9", available: true },
    ],
  },
  {
    id: "n7-track-jacket",
    name: "Nike N7 Track Jacket",
    category: "Men's Jacket",
    price: 100,
    image: { uri: "https://picsum.photos/seed/n7jacket/400/400" },
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: false },
      { label: "XL", available: true },
    ],
  },
  {
    id: "canada-jersey",
    name: "Canada 2024 Home Jersey",
    category: "Men's Soccer Jersey",
    price: 90,
    image: { uri: "https://picsum.photos/seed/canadajersey/400/400" },
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
    ],
  },
  {
    id: "academy-backpack",
    name: "Nike Academy Backpack",
    category: "Training Bag",
    price: 45,
    image: { uri: "https://picsum.photos/seed/academybag/400/400" },
    sizes: [{ label: "One Size", available: true }],
  },
  {
    id: "air-zoom-mercurial",
    name: "Air Zoom Mercurial",
    category: "Men's Soccer Cleats",
    price: 200,
    image: { uri: "https://picsum.photos/seed/mercurial/400/400" },
    sizes: [
      { label: "M 7", available: true },
      { label: "M 8", available: true },
      { label: "M 9", available: false },
      { label: "M 10", available: true },
    ],
  },
];
