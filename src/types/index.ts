export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface Teacher {
  id: string;
  name: string;
  position: string;
  subject: string;
  image: string;
  education: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  type: "image" | "video";
  videoUrl?: string;
}

export interface Extracurricular {
  id: string;
  name: string;
  description: string;
  image: string;
  schedule: string;
  coach: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity?: string;
}

export interface OrgMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
