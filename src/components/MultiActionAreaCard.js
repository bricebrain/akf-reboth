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

export default function MultiActionAreaCard({ item }) {
  return (
    <Grow
      key={item.id}
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <Card
        sx={{
          width: "300",
          height: 280,

          marginBottom: 3,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={item.url}
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
                {item.name}
              </Typography>

              <span style={{ fontWeight: "bold", paddingTop: 4 }}>
                {" "}
                {item.price} FCFA
              </span>
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
    </Grow>
  );
}
