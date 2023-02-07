import Image from "next/image";
import React from "react";
import profilePic from "../../public/logoMin.jpg";

function Banner() {
  return (
    <div
      style={{
        border: "2px solid #0B0E73",
        backgroundColor: "#0B0E73",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={100}
        //automatically
        //provided
        height={50}
        //automatically
        //provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}

export default Banner;
