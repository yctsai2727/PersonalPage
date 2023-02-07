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

class JobListitem extends React.Component{
    render(){
    const temp:JSX.Element[]=[];
    for(const key in data){
        temp.push(
    <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <React.Fragment>
            <Box display="flex" width="100%" justifyContent="space-between">
                <Typography
            component="span"
            color="text.primary"
          >
            {data[key]['post']}
            </Typography>
            <Box display="flex" alignItems="center" flexDirection="column">
            <Typography
            color="grey"
            variant="body2"
          >
            {data[key]['name']}
            </Typography>
            <Typography
            color="grey"
            variant="body2"
          >
            {data[key]['year']}
            </Typography>
            </Box>
                </Box>
            
            </React.Fragment>
            }

          secondary={
            <React.Fragment>
              <Typography
                variant="body2"
                color="grey"
                paragraph={true}
                sx={{ whiteSpace: 'pre-line'}}
              >
                {data[key]['despcription']}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
        )
    }
    return (<>{temp}</>)
    }
}

export default function AboutMe () {

    return (
        <Card  variant="outlined" sx={{width:"100%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)"}}>
            <CardHeader        
            title="About Me"  
            subheader="Sam Leung, Cheuk Wai"
                    />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hi everyone, I am Sam. A year 3 Computer Science undUndergraduate of HKUST. I am interested in Machine Learning and any other application of CS like Web/App development. I am glad to chat with all of you. Please feel free to contact me if you want to make a friend.
        </Typography>
      </CardContent>
      <Divider variant="middle"/>
        <CardContent>
        <Typography variant="body1" color="text.secondary">
        Job Experience
        </Typography>
        <List sx={{width:'100%',bgcolor: 'background.paper'}}>
            <JobListitem />
        </List>
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
        
    
        )
}