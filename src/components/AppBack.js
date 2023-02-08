import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Router, { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import profilePic from "../../public/logoMin.png";
import { Badge } from "@mui/material";

export default function AppBaro() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ diplay: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => Router.back()}
          >
            <ArrowBack />
          </IconButton>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={100}
            //automatically
            //provided
            height={50}
            //automatically
            //provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="ShoppingBag"
            sx={{ mr: 0 }}
          >
            <Badge badgeContent={4} color="success">
              <ShoppingBag />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
