import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Image from "next/image";
import profilePic from "../../public/logoMin.png";

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
          >
            <MenuIcon />
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
          <ShoppingBag />
          {/* <Button color="inherit">LoginO</Button> */}
        </Toolbar>
      </AppBar>
      jdjddjhhh
    </Box>
  );
}
