import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grow,
} from "@mui/material";

export default function ItemDetail({ item }) {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <Card
        key={item.id}
        sx={{
          width: 350,

          marginBottom: 0,
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
        <CardActions
          style={{
            border: "1px solid red",
            margin: 0,
            fontSize: 8,
            height: 30,
            padding: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            color="primary"
            style={{
              border: "1px solid red",
              margin: 0,
              fontSize: 8,
              width: 30,
              padding: 0,
            }}
          >
            Details
          </Button>
          <Button
            size="small"
            color="primary"
            style={{
              border: "1px solid red",
              margin: 0,
              fontSize: 8,
              width: 30,
              padding: 0,
            }}
          >
            Ajouter au panier
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
}
