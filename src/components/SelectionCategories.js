import { ButtonBase, Card, CardMedia } from "@mui/material";
import React from "react";

function SelectionCategories({ item, transfertTo }) {
  return (
    <ButtonBase onClick={(e) => transfertTo(e, item.path)}>
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: 128 }}
            component="img"
            image={item.url}
            title="Pancakes"
            alt="Pancakes"
          />
          <div
            style={{
              position: "absolute",
              fontFamily: "Chalkduster",
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontSize: 16,
              color: "white",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {item.title}
          </div>
        </div>
      </Card>
    </ButtonBase>
  );
}

export default SelectionCategories;
