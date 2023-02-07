import Image from "next/image";
import React from "react";

function Card({ item }) {
  return (
    <div
      style={{ width: 200, height: 300, backgroundColor: "yellow", margin: 15 }}
    >
      <div
        style={{
          height: "80%",
          backgroundColor: "red",
        }}
      >
        <img
          src={item.picture}
          alt="Picture of the author"
          width={"100%"}
          //automatically
          //provided
          height={"100%"}
          //automatically
          //provided
          //blurDataURL={item.picture}
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div
        style={{
          color: "black",
        }}
      >
        {item.description}
      </div>
    </div>
  );
}

export default Card;
