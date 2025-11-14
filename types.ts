
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}
