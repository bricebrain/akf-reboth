import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function BannerNew({ item }) {
  return (
    <Card>
      <div style={{ position: "relative" }}>
        <CardMedia
          style={{ paddingTop: "2%" }}
          component="img"
          image={item.url}
          title="Pancakes"
          alt="Pancakes"
        />
        <div
          style={{
            position: "absolute",
            fontFamily: "OoohBaby",
            width: "100%",
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            color: "white",

            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {item.description}
        </div>
      </div>
    </Card>
  );
}
