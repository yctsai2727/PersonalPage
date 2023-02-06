import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CoverImage from '../Image/pexels-lukas-574069.jpg'
import Myimage from '../Image/20230125_122649.jpg'
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% 50vh',
        backgroundRepeat: 'no-repeat'        
    }
}
export default function Profile () {
    return (
    <Box width="100%" sx={{backgroundColor:"primary.light"}}>
    <Box display='flex' justifyContent="space-evenly">
    <Box height="100%" width="100%" sx={style.coverimagebox}>
        <Box height="100%" width="100%">
        <Box  height="100%"  display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column">

        <Box  pt={"calc(40vh + 4px)"} >
        <Avatar sx={{ width: 'calc(20vh + 8px)', height: 'calc(20vh + 8px)' , backgroundColor:"#FFFFFF"}}>
        <Avatar
              alt="Sam Leung"
              src={Myimage}
              sx={{ width: '20vh', height: '20vh' }}
            />
        </Avatar>
        </Box>
        <Box mt="30pt" display="flex" alignItems="center" flexDirection="column">  
        <Typography fontFamily="Brush Script MT">Sam Leung, Cheuk Wai </Typography>
        <Typography fontFamily="Bradley Hand">Undergraduate BEng(COMP) in HKUST</Typography>
        <Typography fontFamily="Bradley Hand">Full stack programmer</Typography>

        </Box>
        </Box>
        </Box>
    </Box>
    </Box>
    </Box>
        )
}