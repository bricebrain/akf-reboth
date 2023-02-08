import * as React from "react";

import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Divider,
  Drawer,
  Paper,
} from "@mui/material";
import MultiActionAreaCard from "@/components/MultiActionAreaCard2";
import Carousel from "react-material-ui-carousel";
import BannerNew from "@/components/BannerNew";
import AppBack from "@/components/AppBack";
import SelectionCategories from "@/components/SelectionCategories";
import Articles from "@/components/Articles";
import ItemDetail from "@/components/ItemDetail";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

function Item({ item }) {
  return <BannerNew item={item} />;
}

const articles = [{ id: 1, text: "rouge" }];

export default function Maquillage() {
  return (
    <>
      <AppBack />

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          "& > :not(style)": {
            width: "100%",
            height: 200,
          },
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "nowrap",
          "& > :not(style)": {
            width: "30%",
            height: 15,
            marginTop: 7,
          },
        }}
      >
        <p>{"nom"}</p>
      </Box>
      <Divider />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          "& > :not(style)": {
            width: "40%",
            marginTop: 2,
          },
        }}
      >
        {articles.map((item) => (
          <ItemDetail key={item.id} item={item} />
        ))}
      </Box>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

{
  /* <Drawer anchor={"left"} open={false} onClose={false}>
          <div style={{ border: "2px solid red", height: 50, width: 50 }}></div>
        </Drawer> */
}
