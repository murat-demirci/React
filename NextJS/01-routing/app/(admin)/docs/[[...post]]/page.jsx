import Square from "@/app/components/square";
import React from "react";

export default function page({ params }) {
  return (
    <div>Post: {params.post !== undefined ? <Square /> : params.post}</div>
  );
}
