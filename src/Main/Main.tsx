import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import CoverImage from '../Image/turbulence.png'
import Myimage from '../Image/icon.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import data from '../job_exp.json'
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% 16rem',
        backgroundRepeat: 'no-repeat',
        height:"16rem"        
    }
}
export default function Main (props:{child:ReactNode}) {
    return(
    <Box width="100%" minHeight="100vh" sx={{backgroundColor:"#F2F6F8"}}>
    <Box display='flex' justifyContent="space-evenly">
    <Box position="relative" height="100%" width="100%" sx={style.coverimagebox}>
        <Box width="100%" position="relative" top="35%" display="flex" alignItems="center" flexDirection="column">  
        <Typography fontFamily="Bradley Hand" color="white">Yun Chen Tsai</Typography>
        <Typography fontFamily="Bradley Hand" color="white">Theoretical Computer Scientist & Mathematician</Typography>
        <Typography fontFamily="Bradley Hand" color="white">Research Assistant@HKUST</Typography>
        <Box display="flex" color="white">
        <IconButton aria-label="Email" color="inherit" href="mailto:yctsai@connect.ust.hk">
             <EmailIcon />
        </IconButton>
        <IconButton aria-label="GitHub" color="inherit" href="https://github.com/yctsai2727"> 
             <GitHubIcon />
        </IconButton>
        <IconButton aria-label="GitHub" color="inherit" href="https://github.com/yctsai2727/resume/blob/main/resume.pdf"> 
             <ContactPageOutlinedIcon />
        </IconButton>
        </Box>
        {/* <IconButton aria-label="Instagram" color="inherit" href="https://www.instagram.com/samlcw0203/">
             <InstagramIcon />
        </IconButton>
        <IconButton aria-label="Facebook" color="inherit" href="https://www.facebook.com/samleung26070728/">
             <FacebookIcon />
        </IconButton> */}
        </Box>
        <Box height="100%" width="100%">
        <Box  height="100%"  display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column">

        <Box  mt={"8rem"} >
        <Avatar sx={{ width: '180px', height: '180px' , backgroundColor:"#FFFFFF"}}>
        <Avatar
              alt="Tasi Yun Chen"
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
