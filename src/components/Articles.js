import React from "react";
import Card from "./Card";

function Articles({ products }) {
  return (
    <div
      style={{
        border: "2px solid green",
        flex: 1,
        display: "flex",
        flex: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
        }}
      >
        {products.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
