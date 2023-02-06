import { Avatar, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CoverImage from '../Image/turbulence.png'
import Myimage from '../Image/20230125_122649.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% min(50vh , 280px)',
        backgroundRepeat: 'no-repeat',
        height:"min(50vh , 280px)"        
    }
}
export default function AboutMe () {
    return (
    <Box width="100%" >
    <Box display='flex' justifyContent="space-evenly">
    <Box position="relative" height="100%" width="100%" sx={style.coverimagebox}>
        <Box width="100%" position="absolute" top="35%" display="flex" alignItems="center" flexDirection="column">  
        <Typography fontFamily="Brush Script MT" color="white">Sam Leung, Cheuk Wai </Typography>
        <Typography fontFamily="Bradley Hand" color="white">Undergraduate BEng(COMP) in HKUST</Typography>
        <Typography fontFamily="Bradley Hand" color="white">Full stack programmer</Typography>
        </Box>
        <Box height="100%" width="100%">
        <Box  height="100%"  display="flex" justifyContent="space-evenly" alignItems="center" flexDirection="column">

        <Box  pt={"min(50vh , 280px)"} >
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
        <Card  variant="outlined" sx={{width:"100%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)"}}>
            <CardHeader        
            title="About Me"  
            subheader="Sam Leung, Cheuk Wai"
                    />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions>
      <Box display="flex" width="50%" mt="16px">
        <IconButton aria-label="GitHub" color="inherit" href="https://github.com/cwleungar"> 
             <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Email" color="inherit" href="mailto:cwleungar@connect.ust.hk">
             <EmailIcon />
        </IconButton>
        <IconButton aria-label="Instagram" color="inherit" href="https://www.instagram.com/samlcw0203/">
             <InstagramIcon />
        </IconButton>
        <IconButton aria-label="Facebook" color="inherit" href="https://www.facebook.com/samleung26070728/">
             <FacebookIcon />
        </IconButton>
        </Box>
      </CardActions>
        </Card>
        </Box>
        
    </Box>
    </Box>
        )
}