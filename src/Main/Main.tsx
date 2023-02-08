import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import CoverImage from '../Image/turbulence.png'
import Myimage from '../Image/20230125_122649.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import data from '../job_exp.json'
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% min(50vh , 280px)',
        backgroundRepeat: 'no-repeat',
        height:"min(50vh , 280px)"        
    }
}
export default function Main (props:{child:ReactNode}) {
    return(
    <Box width="100%" minHeight="100vh" sx={{backgroundColor:"#F2F6F8"}}>
    <Box display='flex' justifyContent="space-evenly">
    <Box position="relative" height="100%" width="100%" sx={style.coverimagebox}>
        <Box width="100%" position="absolute" top="35%" display="flex" alignItems="center" flexDirection="column">  
        <Typography fontFamily="Brush Script MT" color="white">Sam Leung, Cheuk Wai </Typography>
        <Typography fontFamily="Bradley Hand" color="white">Undergraduate BEng(COMP) in HKUST</Typography>
        <Typography fontFamily="Bradley Hand" color="white">Full stack programmer</Typography>
        </Box>
        <Box height="100%" width="100%">
        <Box  height="100%"  display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column">

        <Box  mt={"min(50vh , 280px)"} >
        <Avatar sx={{ width: '180px', height: '180px' , backgroundColor:"#FFFFFF"}}>
        <Avatar
              alt="Sam Leung"
              src={Myimage}
              sx={{ width: '170px', height: '170px' }}
            />
        </Avatar>
        </Box>
        </Box>
        </Box>
    </Box>
    </Box>
    <Box mt="90pt" display="flex" width="100%" justifyContent="space-evenly">
        <Box width="80%">
        {props.child}

        </Box>
        
    </Box>
    </Box>
    )
}
