import { BlogItem } from "@/app/models/blog";

const articulos: BlogItem[] = [
  {
    id: 1,
    title: "Técnicas Avanzadas de Lanzamiento",
    summary:
      "Aprende técnicas avanzadas para mejorar tu precisión y distancia en el lanzamiento.",
    imageUrl: "/images/bg-header.png",
    category: "Técnicas",
  },
  {
    id: 2,
    title: "Técnicas Avanzadas de Lanzamiento",
    summary:
      "Aprende técnicas avanzadas para mejorar tu precisión y distancia en el lanzamiento.",
    imageUrl: "/images/bg-header.png",
    category: "Técnicas",
  },
  {
    id: 3,
    title: "Técnicas Avanzadas de Lanzamiento",
    summary:
      "Aprende técnicas avanzadas para mejorar tu precisión y distancia en el lanzamiento.",
    imageUrl: "/images/bg-header.png",
    category: "Técnicas",
  },
  {
    id: 4,
    title: "Técnicas Avanzadas de Lanzamiento",
    summary:
      "Aprende técnicas avanzadas para mejorar tu precisión y distancia en el lanzamiento.",
    imageUrl: "/images/bg-header.png",
    category: "Técnicas",
  },
];
export const getItemsBlog = async (): Promise<BlogItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articulos as BlogItem[]);
    }, 1000);
  });
};
