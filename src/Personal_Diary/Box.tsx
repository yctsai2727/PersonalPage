import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { ReactNode } from "react";
import Mindmap from '../Image/mindmap.png'
import Chart1 from '../Image/chart1.png'
import Chart2 from '../Image/chart2.png'
import Storyboard from '../Image/storyboard.png'

export const Mainbox=styled('div')(({ theme }) => ({

    display:"flex",
    paddingBottom:"3rem",
    [theme.breakpoints.down('md')]: {
        justifyContent:"space-around",
        alignItems: 'center',


        flexDirection:"column"
    },
    [theme.breakpoints.up('md')]: {
        flexDirection:"row",
        justifyContent:"space-around"

    }
  }));
export const SubBox=styled('div')(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        width:"90%"
    },
    [theme.breakpoints.up('md')]: {
        width:"40%"
    }
  }));