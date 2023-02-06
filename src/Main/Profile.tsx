import { Avatar, Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import CoverImage from '../Image/pexels-lukas-574069.jpg'
import Myimage from '../Image/21004063.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height:"100vh"        
    },
    TitleWord:{
        color:"secondary.light"
    },
    mainbox:{
        top:"20%",
        left:"10%",
        width:"80%",
        display:"flex",
        justifyContent:"space-between"
    }
}
const Mainbox=styled('div')(({ theme }) => ({
    position:"absolute",

    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]: {
      width:"calc(100% - 16px)",
      top:"8px",
      left:"16px",
      flexDirection:"column-reverse",
      alignItems: "center",
      justifyConetnt:"space-between",
      height:"80%"
    },
    [theme.breakpoints.up('md')]: {
        width:"80%",
        top:"20%",
        left:"10%",
    }
  }));
  
export default function Profile () {
    return (
    <Box width="100%" sx={{backgroundColor:"primary.light"}}>
    <Box position="relative" sx={style.coverimagebox}>
        <Mainbox>     
        <Box>
        <Typography variant="h2" sx={style.TitleWord}>Hi There,</Typography>
        <Typography variant="h2" sx={style.TitleWord}>I am Sam Leung</Typography>
        <Box mt="16px">
        <Button variant="outlined"
            href="/app/About_Me"><Typography variant="h6" sx={style.TitleWord}>About</Typography></Button>
        </Box>
        <Box display="flex" width="50%" mt="16px">
        <IconButton aria-label="GitHub" color="primary" href="https://github.com/cwleungar"> 
             <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Email" color="primary" href="mailto:cwleungar@connect.ust.hk">
             <EmailIcon />
        </IconButton>
        <IconButton aria-label="Instagram" color="primary" href="https://www.instagram.com/samlcw0203/">
             <InstagramIcon />
        </IconButton>
        <IconButton aria-label="Facebook" color="primary" href="https://www.facebook.com/samleung26070728/">
             <FacebookIcon />
        </IconButton>
        </Box>
        </Box>
        <Box>
        <Avatar sx={{ width: {md:'calc(50vh + 8px)',xs:"180px"}, height: {md:'calc(50vh + 8px)',xs:"180px"} , backgroundColor:"#FFFFFF"}}>
        <Avatar
              alt="Sam Leung"
              src={Myimage}
              sx={{ width: {md:'50vh',xs:"172px"}, height: {md:'50vh',xs:"172px"} }}
            />
        </Avatar>
        </Box>
        
       </Mainbox>
    </Box>


    </Box>
        )
}