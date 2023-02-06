import { Box, Theme } from "@mui/material";
import { profile } from "console";
import React from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

const styles = (theme: Theme) => ({
  sideBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      width: 250,
    },
  },
});

export default function Main (){
      const location=useLocation();
    /*
    <Box>
        <TopBar />
        <Box display="flex">
          <Box sx={styles.sideBar}>
            <SideBar />
          </Box>
              <Switch location={location}>
                <Route path={"/profile"}>
                  <Profile />
                </Route>
              </Switch>
        </Box>
      </Box>
      */
    return (
      <Box>
        hi
      </Box>
    );
  }

  