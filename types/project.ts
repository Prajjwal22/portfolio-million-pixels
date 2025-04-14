export interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
  description?: string;
  client?: string;
  services?: string[];
  date?: string;
  link?: string;
} 