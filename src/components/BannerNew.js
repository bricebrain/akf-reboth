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
            fontFamily: "Chalkduster",
            width: "100%",
            textAlign: "center",
            fontSize: 20,
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
    // <Card sx={{ maxWidth: "100%" }}>
    //   <CardActionArea>
    //     <CardMedia component="img" image={item.url} alt="green iguana" />
    //     <CardContent>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}

// import React from "react";
// import Card from "@material-ui/core/Card";
// import {CardMedia} from "@material-ui/core";
// const SimpleCard: React.FC<any> = (props) => {
// return (
//   <Card className={classes.root}>
//     <div style={{ position: "relative" }}>
//       <CardMedia style={{ height: "250px", paddingTop: "2%" }}   component="img" image={"/pancakes.jpg"} title="Pancakes" alt="Pancakes"/>
//       <div style={{position: "absolute", color: "white",top: 10,left: "50%",transform: "translateX(-50%)",}}> Some text</div>
//   </div>
// </Card>
// )};
// export default SimpleCard;
