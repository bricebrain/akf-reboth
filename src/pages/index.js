import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box, Button, Drawer, Paper } from "@mui/material";
import MultiActionAreaCard from "@/components/CardItem";
import Carousel from "react-material-ui-carousel";
import BannerNew from "@/components/BannerNew";
import AppBaro from "@/components/AppBaro";
import SelectionCategories from "@/components/SelectionCategories";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function Item({ item }) {
  return (
    <BannerNew item={item} />
    // <Paper>
    //   <h2>{props.item.name}</h2>
    //   <p>{props.item.description}</p>
    // </Paper>
  );
}

export default function Home() {
  let items = [
    {
      name: "Random Name #1",
      description: "Toujours plus belle",
      url: "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
    },
    {
      name: "Random Name #2",
      description: "Arrivage permanent",
      url: "https://www.pornic.com/medias/images/prestataires/maroquinerie-reve-de-jour-19958.jpg",
    },
    {
      name: "Random Name #2",
      description: "le meilleur du prêt à porter",
      url: "https://la-redoute-wordpress-production.s3.eu-west-3.amazonaws.com/wp-content/uploads/2018/09/04115459/actu_redoute_collection-1024x683.jpg",
    },
  ];

  let catItems = [
    {
      title: "Maroquinerie",
      url: "https://img.ltwebstatic.com/images3_pi/2022/03/22/1647943260c6f1685940f4225b994befbf3de1b1f2.webp",
    },
    {
      title: "Prët à porter",
      url: "https://i0.wp.com/blog.ebunoluwole.com/wp-content/uploads/2022/06/Opening-A-Fashion-Boutique-What-You-Need-To-Know.png?fit=2240%2C1260&ssl=1",
    },
    {
      title: "Maquillage",
      url: "https://media.istockphoto.com/id/1221677097/fr/photo/maquillage-des-produits-cosm%C3%A9tiques-sur-fond-de-couleur-rose.jpg?s=612x612&w=0&k=20&c=9Ub2vBzlDu7cwxisVft5xLuV4aQclVYK00QXcKsOCeQ=",
    },
  ];
  return (
    <>
      <AppBaro />
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          "& > :not(style)": {
            width: "100%",
            height: 200,
          },
        }}
      >
        <Carousel height={200}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>

      <div
        style={{
          color: "gray",
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid green",
        }}
      >
        Categories
      </div>

      <div
        style={{
          marginTop: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "nowrap",
            "& > :not(style)": {
              width: "30%",
              height: 128,
            },
          }}
        >
          {catItems.map((item) => (
            <Paper elevation={3}>
              <SelectionCategories key={item.url} item={item} />
            </Paper>
          ))}
        </Box>
      </div>

      <div
        style={{
          color: "gray",
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Les plus populaires
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          "& > :not(style)": {
            width: 300,
            height: "100%",
          },
        }}
      >
        {[1, 2, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14].map((item) => (
          <div style={{ marginTop: 8 }}>
            <MultiActionAreaCard key={item} />
          </div>
        ))}

        <Drawer anchor={"left"} open={false} onClose={false}>
          <div style={{ border: "2px solid red", height: 50, width: 50 }}></div>
        </Drawer>
      </Box>
    </>
  );
}
