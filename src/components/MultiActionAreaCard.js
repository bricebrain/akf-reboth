import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";

export default function MultiActionAreaCard({ item }) {
  return (
    <Card
      key={item.id}
      sx={{
        width: 300,
        height: 280,
        border: "1px solid green",
        marginBottom: 3,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://img.ltwebstatic.com/images3_pi/2022/09/19/16635547874ab2a7c4b54d39b1279a64fbf7c93af9_thumbnail_900x.webp"
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body3" color="text.secondary">
              Lizards are a widespread group of squamate
            </Typography>

            <span>33 000 FCFA</span>
            <div
              style={{
                display: "flex",

                justifyContent: "space-between",
              }}
            ></div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
        <Button size="small" color="primary">
          Ajouter au panier
        </Button>
      </CardActions>
    </Card>
  );
}
