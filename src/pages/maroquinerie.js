import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Divider, Drawer, Paper } from "@mui/material";
import MultiActionAreaCard from "@/components/MultiActionAreaCard2";
import Carousel from "react-material-ui-carousel";
import BannerNew from "@/components/BannerNew";
import AppBack from "@/components/AppBack";
import SelectionCategories from "@/components/SelectionCategories";
import Articles from "@/components/Articles";
import { db } from "../firebase-config";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

export default function Maroquinerie() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const loadData = async () => {
    const databaseProducts = collection(db, "maroquinerie");
    const data = await getDocs(databaseProducts);
    const products = data.docs.map((doc) => doc.data());
    console.log(products);
    setArticles(products);
  };

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
        <p>Maroquinerie</p>
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
          <MultiActionAreaCard key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
}

{
  /* <Drawer anchor={"left"} open={false} onClose={false}>
          <div style={{ border: "2px solid red", height: 50, width: 50 }}></div>
        </Drawer> */
}
