export interface BlogPost {
  id: string;
  title: string;
  author: string;
  status: "draft" | "published" | "archived";
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  status: "active" | "invited";
}

export interface CareerListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  status: "open" | "closed";
}
