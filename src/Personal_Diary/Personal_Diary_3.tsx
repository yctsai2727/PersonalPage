import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { ReactNode } from "react";
import Mindmap from '../Image/p3_mindmap.png'
import Chart1 from '../Image/chart1.png'
import Chart2 from '../Image/chart2.png'
import Storyboard from '../Image/storyboard.png'
import Grid from '@mui/material/Grid';
import Image1 from '../Image/image8.png'
import Image2 from '../Image/image9.png'
import Image3 from '../Image/image10.png'
import Image4 from '../Image/image11.png'
import Image5 from '../Image/image4.png'
import Image6 from '../Image/image5.png'
import Image7 from '../Image/image6.png'
import Image8 from '../Image/image7.png'

import Myimage from '../Image/20230125_122649.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import data from '../personal_diary.json'
import PeopleIcon from '@mui/icons-material/People';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Mainbox, SubBox } from "./Box";
import Paper from '@mui/material/Paper';

export default function Personal_Diary_3 () {
  const YoutubeEmbed = ( {embedId }:{embedId:String} ) => (
    <Box className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
return(<>
 <Box>
        <Box display="flex" justifyContent= 'center' pb="3rem">
        <Typography variant="h6">“1 to 1 Skills Learning VR Masterclass  - Private Tutoring”</Typography>
        </Box>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>BRAINSTORMING</Typography>
        
        </Box>
        <Mainbox >
        <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="body1" color="grey">
            At the beginning of our project, we decided to brainstorm about the use of social XR and how can we perform learning assistance with VR/AR technology. And we concluded our suggestion in some parts.
            </Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">
            <Typography variant="body1" color="grey">
            1) Sport
            </Typography>
            <Typography variant="body1" color="grey">
            2) Professional Skills
            </Typography>
            <Typography variant="body1" color="grey">
            3) Academic skills
            </Typography>    
            <Typography variant="body1" color="grey">
            4) Daily life skills
            </Typography>
            </Box>
            <Typography variant="body1" color="grey">
            It is hard to select one area as all of them seem nice to us. So, we try to gather feedback from our relatives with story boards. And we decided to build a platform for 1-to-1 private tutoring.
            </Typography>
            </Box>
        </SubBox>
        <SubBox>
            <Box maxWidth="100%">
            <img width="100%" src={Mindmap}/>
            </Box>
        </SubBox>
        </Mainbox>
        <Mainbox>
        <Grid container justifyContent="center" spacing={3}>

            <Grid item xs={10} md={5}>
            <Box width="100%">
                <Typography variant="body1" color="grey">
                1) Daily life skills -- Cooking
                </Typography>
            <img width="100%" src={Image3}/>
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            2) Sport skills -- Chess
                </Typography>
            <img width="100%" src={Image2}/>           
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            3) Daily life skills -- Toilet Clogging
                </Typography>
            <img width="100%" src={Image4}/>            
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>                
            <Box width="100%">
            <Typography variant="body1" color="grey">
            4) Sport skills -- Extreme sport
                </Typography>
            <img width="100%" src={Image1}/>            
            </Box>
            </Grid>
        </Grid>
        </Mainbox>
        <Mainbox>
        <Box width={"80%"}>
        <Typography variant="body1" color="grey">
            After our discussion on the feedback, we found that users are interested in dailly life skills and they also suggested that we could try academic area like Physics with VR envrionment to perform demonstration of different experiments. So, we grouped the comments and propose our "1 to 1 Skills Learning VR Masterclass  - Private Tutoring" </Typography>
        </Box>
        </Mainbox>
        <Box width="100%" display="flex" flexDirection= 'column' alignItems="center" pb="3rem">
            <Box width="80%" display="flex" flexDirection= 'column' alignItems="center">
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>WHAT'S THE PROBLEM</Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">

            <Typography variant="body1" color="grey" pb="1rem">
            We did some research on the current situation of private tutoring and we found that there are some problems in the current market. Urban citizens are busy with their work and they may not have time to travel to the tutoring center. And the tutors may not have time to travel to the students' home. Also, we found that the market is huge, citizens tried to learn daily life skills via youtube like cooking, but they may not have a chance to ask questions. Currently, there are some online tutoring platform but they are not using VR technology that they cannot provide a 3d environment for the students to learn. So, we want to build a platform to connect the tutors and students with VR technology.
 
            </Typography>
            </Box>
            </Box>
        </Box>
        <Mainbox>
            <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="h6" color="grey" mb="1rem" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>POV</Typography>
            <List sx={{width:"100%"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content", paddingRight:"3px"}}>
                <PeopleIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
              User: 
               </Typography>
                <Typography color="grey">
                People who don’t have enough time or aren’t physically capable to enroll in any class for learning                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content", paddingRight:"3px"}}>
                <QuestionMarkIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
                    Need: 
               </Typography>
                <Typography color="grey">
                They want to acquire new skills to enhance their personal development, which can be any skill they think useful or interested in
                </Typography>
              </Box>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{cursor:"default"}}>
              <ListItemIcon sx={{minWidth:"fit-content",paddingRight:"3px"}}>
                <TipsAndUpdatesIcon/>
              </ListItemIcon>
              <Box display="flex" alignItems="center">
              <Typography pr="1rem" color="grey">
              Goal: 
               </Typography>
                <Typography color="grey">
                Learn new life skills in a efficient and interactive way
                </Typography>
              </Box>
              
            </ListItemButton>
          </ListItem>
          
        </List>

            </Box>
            </SubBox>
            <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="h6" color="grey" mb="1rem" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>DESIGN GOALS</Typography>
            <Typography color="grey">
            A VR platform for 1-to-1 private tutoring to provide an immersive learning experience with a 3D environment. We would like to focus on daily life skills, academic skills and some static sport skills. The VR environment can be customized by the tutors and they can also upload their own teaching materials. The platform can also provide a 1-to-many live streaming function for the tutors to teach more students at the same time. Furthermore, we would like to install physics engine to simulate the real world physics in the VR environment.
            
            </Typography>
            </Box>
            </SubBox>
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>DEMOS OF OUR PROTOTYPE</Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>VIDEO DEMOS</Typography>
        
        </Box>
        <Mainbox>
            <Box display={"flex"} flexDirection="column" alignItems="center" width="80%" justifyContent={"center"}>
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 1px 0px'}}>teaching kitchen skill</Typography>
            
            <Box display="flex" height="min(60vh , 480px)" position="relative" width="min(60vw, 853px)" justifyContent="center">
            <YoutubeEmbed embedId="GepUUaFSBAI"/>
            </Box>
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 1px 0px'}}>teaching Chess</Typography>
            
            <Box display="flex" height="min(60vh , 480px)" position="relative" width="min(60vw, 853px)" justifyContent="center">
            <YoutubeEmbed embedId="mez2f7c4z0s"/>
            </Box>
            
            </Box>
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>PERSONAL REFLECTION</Typography>
        
        </Box>
        <Mainbox>
        <Box width="80%">
        <Typography color="grey">
        As I reflect on our group project of designing a 1 to 1 virtual tutor platform with VR, I feel a sense of pride and satisfaction. It was a challenging project, but we worked together as a team and overcame various obstacles to create a functional prototype that we can be proud of.
        </Typography>
        <Typography color="grey">

        I was involved in brainstorming and in charge of the market research. I proposed the idea of working with virtual tutors with real world physic environment. I also did some research on the current market and found that there is a huge market for private tutoring. And we decided to build a platform to connect the tutors and students with VR technology. After that, I worked with my teammates to create a storyboard to gather feedback from our relatives. And we decided to build a platform for 1-to-1 private tutoring that can provide daily life skills, academic skills and some static sport skills.
        </Typography>
        <Typography color="grey">

        One of the biggest changes I did to the project was to extend the scope of our project from academic to daily life skills after research. We found that people are usually lack of daily life skills like cooking, fixing toilet clog and they usually learn from youtube. However, they may not have a chance to ask questions. So, we decided to build a platform to connect the tutors and students with VR technology.
        </Typography>
        <Typography color="grey">

        Overall, I believe that our prototype for the 1 to 1 virtual tutor platform with VR is a success. We worked together as a team and overcame various obstacles to create a functional prototype that we can be proud of. I am proud of our team and I am proud of our project.
        </Typography>
        </Box>
        </Mainbox>

        </Box></>)
}