import React from "react";

function Navigation() {
  return (
    <div
      style={{
        flex: 0.1,
        display: "flex",
        border: "2px solid white",
        backgroundColor: "white",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
          textDecoration: "none",
          listStyle: "none",
        }}
      >
        <li>ACCEUIL</li>
        <li>MAROQUINERIE</li>
        <li>VETEMENTS</li>
        <li>MAQUILLAGE</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default Navigation;
