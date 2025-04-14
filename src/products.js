import croakedImage from '../src/assets/croaker.png';
import sheelavuImage from '../src/assets/sheelavu.jpg';
import LizardImage from '../src/assets/LIZARD.jpg';
import perchImage from '../src/assets/pinkperch.jpg';
import silverBellyImage from '../src/assets/silverbelly.jpg';
import sharkImage from '../src/assets/shark.jpg';
import pulliMonthaImage from '../src/assets/pulli montha.jpg';
import ayalaImage from '../src/assets/ayala.jpg';
export const products = [
  {
    id: 1,
    name: 'Baracuda',
    price: 100,
    images: {
      large: [
        sheelavuImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782512_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A flavorful and protein-rich dried fish, perfect for traditional seafood dishes.',
    slug: 'baracuda-dried',
     distributor: 'Deep Sea Foods'
    
  },
  {
    id: 2,
    name: 'Croaker',
    price: 200,
    images: {
      large: [
        croakedImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782637_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'Known for its mild yet rich taste, ideal for soups and stews.',
    slug: 'croaker-dried',
    distributor: 'SeaFood Ltd'
  },
  {
    id: 3,
    name: 'Lizard Fish',
    price: 250,
    images: {
      large: [
         LizardImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782768_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A delicacy with a firm texture, best enjoyed fried or in curry preparations.',
    slug: 'lizard-fish-dried',
    distributor: 'Ocean Fresh',
  },
  {
    id: 4,
    name: 'Pink Perch',
    price: 150,
    images: {
      large: [
        perchImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782866_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A soft-textured dried fish with a mild sweetness, perfect for grilling or curries.',
    slug: 'pink-perch',
     distributor: 'Deep Sea Foods'
  },
  {
    id: 5,
    name: 'Silver Belly',
    price: 130,
    images: {
      large: [
        silverBellyImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782934_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A small but tasty dried fish, commonly used in South Indian and Sri Lankan cuisine.',
    slug: 'silver-belly-dried',
    distributor: 'SeaFood Ltd'
  },
  {
    id: 6,
    name: 'Shark',
    price: 210,
    images: {
      large: [
        sharkImage,
        'https://www.fishmaidonline.com/storage/product/product_1720782979_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A unique and nutritious dried fish with a strong flavor, loved by seafood enthusiasts.',
    slug: 'shark-dried',
    distributor: 'SeaFood Ltd'
  },
  {
    id: 7,
    name: 'PULLI MOTHA',
    price: 140,
    images: {
      large: [
        pulliMonthaImage,
        'https://www.fishmaidonline.com/storage/product/product_1716273653_1.png'
      ]
    },
    type: 'Dried Fish',
    description: 'a tender and flavorful fish, perfect for aromatic curries. making it a great choice for traditional seafood dishes.',
    slug: 'pulli-motha',
    distributor: 'Ocean Fresh',
  },
  {
    id: 8,
    name: 'Ayla / Indian Mackerel',
    price: 240,
    images: {
      large: [
        ayalaImage,
        'https://www.fishmaidonline.com/storage/product/product_1718862634_0.png'
      ]
    },
    type: 'Dried Fish',
    description: 'A popular dried fish variety, high in omega-3 and great for deep-frying or curries.',
    slug: 'ayla',
    distributor: 'SeaFood Ltd'
  }
];
