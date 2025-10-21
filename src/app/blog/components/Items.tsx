import { BlogItem } from "@/app/models/blog";
import React, { JSX } from "react";
import Item from "@/app/blog/components/Item";

interface ItemsProps {
  articles: BlogItem[];
}
export default function Items({ articles }: ItemsProps): JSX.Element {
  return (
    <>
      {articles.map((article) => (
        <Item key={article.id} article={article} />
      ))}
    </>
  );
}
