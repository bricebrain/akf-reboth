import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Box, Button, Drawer, Paper } from "@mui/material";
import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import Carousel from "react-material-ui-carousel";
import BannerNew from "@/components/BannerNew";
import AppBaro from "@/components/AppBaro";
import SelectionCategories from "@/components/SelectionCategories";
import Articles from "@/components/Articles";
import { db } from "../firebase-config";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";

function Item({ item }) {
  return <BannerNew item={item} />;
}

export default function Home() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const loadData = async () => {
    const databaseProducts = collection(db, "mostPopular");
    const data = await getDocs(databaseProducts);
    const products = data.docs.map((doc) => doc.data());
    console.log(products);
    setArticles(products);
  };

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
      url: "https://media.istockphoto.com/id/530528435/photo/shelves-with-handbags.jpg?s=612x612&w=0&k=20&c=-IL3WO7l8zqaAl20GyoIin3ggcDQOagDFEMCBf5D7Bg=",
      path: "/maroquinerie",
    },
    {
      title: "Prêt à porter",
      url: "https://i0.wp.com/blog.ebunoluwole.com/wp-content/uploads/2022/06/Opening-A-Fashion-Boutique-What-You-Need-To-Know.png?fit=2240%2C1260&ssl=1",
      path: "/vetements",
    },
    {
      title: "Maquillage",
      url: "https://media.istockphoto.com/id/1221677097/fr/photo/maquillage-des-produits-cosm%C3%A9tiques-sur-fond-de-couleur-rose.jpg?s=612x612&w=0&k=20&c=9Ub2vBzlDu7cwxisVft5xLuV4aQclVYK00QXcKsOCeQ=",
      path: "/maquillage",
    },
  ];

  const transfertTo = (e, href) => {
    e.preventDefault();
    Router.push(href);
  };
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
        }}
      >
        Categories
      </div>

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
          <Paper key={item.url} elevation={3}>
            <SelectionCategories item={item} transfertTo={transfertTo} />
          </Paper>
        ))}
      </Box>

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
            width: "90%",
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
