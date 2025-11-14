
import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Sachet Water',
    description: 'Crisp, clean, and refreshing pure water in a convenient sachet. Perfect for on-the-go hydration.',
    price: 3.00,
    unit: 'per bag',
    imageUrl: 'https://picsum.photos/seed/sachet/400/300',
  },
  {
    id: 2,
    name: 'Bottled Water (50cl)',
    description: 'Our signature purified water in a handy 50cl bottle. Ideal for personal hydration throughout the day.',
    price: 15.00,
    unit: 'per carton of 12',
    imageUrl: 'https://picsum.photos/seed/bottle50/400/300',
  },
  {
    id: 3,
    name: 'Bottled Water (75cl)',
    description: 'A larger 75cl bottle for when you need that extra refreshment. Great for sports and long journeys.',
    price: 20.00,
    unit: 'per carton of 12',
    imageUrl: 'https://picsum.photos/seed/bottle75/400/300',
  },
  {
    id: 4,
    name: 'Dispenser Refill (19L)',
    description: 'The same premium quality water for your home or office dispenser. Ensures a constant supply of pure water.',
    price: 10.00,
    unit: 'per bottle',
    imageUrl: 'https://picsum.photos/seed/dispenser/400/300',
  },
];

export const GALLERY_IMAGES: string[] = [
  'https://i.imgur.com/k2nNB0T.jpeg',
  'https://i.imgur.com/sAVgL3E.jpeg',
  'https://i.imgur.com/d2jZgA8.jpeg',
  'https://i.imgur.com/8x2T1J7.jpeg',
  'https://picsum.photos/seed/gallery5/600/400',
  'https://picsum.photos/seed/gallery6/600/400',
  'https://picsum.photos/seed/gallery7/600/400',
  'https://picsum.photos/seed/gallery8/600/400',
  'https://i.ibb.co/MytN14Rv/WIN-20251110-12-36-10-Pro.jpg',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Health Benefits of Staying Hydrated',
    excerpt: 'Discover why drinking enough water is crucial for your overall health, from boosting energy levels to improving skin complexion.',
    content: 'Staying hydrated is one of the most important things you can do for your body. Water is essential for numerous bodily functions, including regulating temperature, lubricating joints, and transporting nutrients. When you don\'t drink enough water, you can become dehydrated, leading to fatigue, headaches, and difficulty concentrating. \n\nExperts recommend drinking at least eight 8-ounce glasses of water a day, which is about 2 liters. However, your individual needs may vary depending on your activity level, climate, and overall health. Drinking pure, clean water like Aquamartin ensures that you are hydrating your body with the best possible source, free from impurities and contaminants.',
    imageUrl: 'https://picsum.photos/seed/hydration/600/400',
    date: 'July 15, 2024',
    author: 'Dr. Jane Doe',
  },
  {
    id: 2,
    title: 'Behind the Scenes: Our Water Purification Process',
    excerpt: 'Take a deep dive into the state-of-the-art technology we use to ensure every drop of Aquamartin water is pure and safe.',
    content: 'At Aquamartin, we take water purification seriously. Our multi-step process guarantees the highest quality product. It begins with advanced filtration to remove large particles. Then, the water undergoes reverse osmosis, a process that uses a semipermeable membrane to remove dissolved salts, organics, and other microscopic contaminants. \n\nAfter reverse osmosis, we use UV sterilization to eliminate any remaining bacteria and viruses. The final step is ozonation, which not only disinfects but also improves the taste and freshness of the water. This meticulous process is what makes Aquamartin the trusted choice for pure, refreshing water.',
    imageUrl: 'https://picsum.photos/seed/process/600/400',
    date: 'July 10, 2024',
    author: 'John Smith, Lead Engineer',
  },
  {
    id: 3,
    title: 'Aquamartin and the Community: Our Commitment',
    excerpt: 'Learn how we are giving back to the community and promoting environmental sustainability.',
    content: 'Our commitment extends beyond providing clean water. We believe in being a responsible corporate citizen. Aquamartin actively participates in local community events, sponsoring sports teams and health awareness campaigns. We are also dedicated to sustainability. Our bottles are made from recyclable materials, and we are constantly working to reduce our carbon footprint by optimizing our delivery routes and conserving water in our production facility. \n\nBy choosing Aquamartin, you are not just choosing a healthy beverage; you are supporting a company that cares about the community and the planet.',
    imageUrl: 'https://picsum.photos/seed/community/600/400',
    date: 'July 5, 2024',
    author: 'The Aquamartin Team',
  },
];
