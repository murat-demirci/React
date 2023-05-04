import React from "react";
import { Data } from "../helpers/data";
import Card from "./Card";

export default function Blog() {
  return (
    <div className="main-blog">
      <h1 className="title-blog">Blogs</h1>
      <div className="list-blog">
        {Data.map((data, key) => {
          return <Card 
            title={data.title}
            image={data.image}
            content={data.content}
            creator={data.creator}
            publishDate={data.publishDate}
            key={key}
          />;
        })}
      </div>
    </div>
  );
}
