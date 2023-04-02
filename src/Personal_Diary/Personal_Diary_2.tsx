import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { ReactNode } from "react";
import Mindmap from '../Image/project2_mindmap.png'
import Chart1 from '../Image/chart1.png'
import Chart2 from '../Image/chart2.png'
import Storyboard from '../Image/storyboard.png'
import Grid from '@mui/material/Grid';
import Image1 from '../Image/image.png'
import Image2 from '../Image/image1.png'
import Image3 from '../Image/image2.png'
import Image4 from '../Image/image3.png'
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

export default function Personal_Diary_2 () {
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
        <Typography variant="h6">“Healthy Lifestyle Oriented Assistant Chatbot”</Typography>
        </Box>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>BRAINSTORMING</Typography>
        
        </Box>
        <Mainbox >
        <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="body1" color="grey">
            At the beginning of our project, we decided to brainstorm about the type of wellbeing agent. And we concluded our suggestion in some parts.
            </Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">
            <Typography variant="body1" color="grey">
            1) Physical wellbeing (eating and sport)
            </Typography>
            <Typography variant="body1" color="grey">
            2) Mental wellbeing (chatting with elderly / task reminder)
            </Typography>
            <Typography variant="body1" color="grey">
            3) Social wellbeing (Help people find friends and suggest event)
            </Typography>    
            <Typography variant="body1" color="grey">
            4) Financial wellbeing (budget control)
            </Typography>
            </Box>
            <Typography variant="body1" color="grey">
            It is hard to select one area as all of them seem nice to us. So, each of us handled one area and draw a storyboard to identify the problem. And then we try to gather feedback from our relatives.
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
                1) Physical wellbeing
                </Typography>
            <img width="100%" src={Image3}/>
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            2) Mental wellbeing
                </Typography>
            <img width="100%" src={Image2}/>           
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            3) Social wellbeing
                </Typography>
            <img width="100%" src={Image4}/>            
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>                
            <Box width="100%">
            <Typography variant="body1" color="grey">
            4) Financial wellbeing
                </Typography>
            <img width="100%" src={Image1}/>            
            </Box>
            </Grid>
        </Grid>
        </Mainbox>
        <Mainbox>
        <Typography variant="body1" color="grey">
            After our discussion on the feedback, we all agree to build a chatbot for physical wellbeing</Typography>
        </Mainbox>
        <Box width="100%" display="flex" flexDirection= 'column' alignItems="center" pb="3rem">
            <Box width="80%" display="flex" flexDirection= 'column' alignItems="center">
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>WHAT'S THE PROBLEM</Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">

            <Typography variant="body1" color="grey" pb="1rem">
            Urban people usually suffer from some chronic diseases like The Three High and Obesity. Healthy eating and sports habit are necessary for us to maintain our health. So, we decided to make a Chatbot Agent for promoting a healthy lifestyle with help in controlled eating habits and encouraging a regular sports habit.
 
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
                All users, especially those who pay attention to personal health  
                </Typography>
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
                  Create healthy eating and sport habit
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
                Provide information on healthy life style and promoting physical wellbeing             
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
            A Chatbot Agent that provide assistance on choosing meal, sport and weight lossing
            <ListItem  style={{ display: 'list-item' }}>
            Sport
            <ListItem  style={{ display: 'list-item' }}>
                Record your sport activity
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Recommend sport activity
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Provide information of played sport (intensity, calories burned)
            </ListItem>
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Meal
                <ListItem  style={{ display: 'list-item' }}>
                Record your nutrition intake
                </ListItem>
                <ListItem style={{ display: 'list-item' }}>
                Provide nutrition information of food
                </ListItem>
                <ListItem style={{ display: 'list-item' }}>
                Recommend healthy mealset
                </ListItem>
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Weight lossing
                <ListItem  style={{ display: 'list-item' }}>
                Calculate BMI based on your height and weight
                </ListItem>
            </ListItem>
            
            </Typography>
            </Box>
            </SubBox>
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>DEMOS OF OUR PROTOTYPE</Typography>
        </Box>
        <Mainbox>
            <Grid container justifyContent="center" spacing={3}>

            <Grid item xs={10} md={5}>
            <Box width="100%">
                <Typography variant="body1" color="grey">
                1) Information about sport
                </Typography>
            <img width="100%" src={Image5}/>
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            2) Healthy mealset suggestion
                </Typography>
            <img width="100%" src={Image6}/>           
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>
            <Box width="100%">
            <Typography variant="body1" color="grey">
            3) nutrition information of food
                </Typography>
            <img width="100%" src={Image7}/>            
            </Box>
            </Grid>
            <Grid item xs={10} md={5}>                
            <Box width="100%">
            <Typography variant="body1" color="grey">
            4) Motivate user to do sport
                </Typography>
            <img width="100%" src={Image8}/>            
            </Box>
            </Grid>
        </Grid>
        
        </Mainbox>
        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>VIDEO DEMOS</Typography>
        
        </Box>
        <Mainbox>
            <Box display="flex" minHeight="60vh" position="relative" width="80%" justifyContent="center">
              
            <YoutubeEmbed embedId="gEhxUhWXKbA"/>

            </Box>
              
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>PERSONAL REFLECTION</Typography>
        
        </Box>
        <Mainbox>
        <Box width="80%">
        <Typography color="grey">
        The project was particularly relevant given the current trend toward AI and the increasing interest in using technology to improve our health and wellbeing. I am thrilled to say that Rasa is quite a nice framework to enable us to create a useful tool to promote a healthy life style. 
        </Typography>
        <Typography color="grey">

        I was involved in brainstorming and in charge of coding the part of the chatbot that provided meal recommendations. This was a fascinating and challenging task, as we needed to find a way to provide useful recommendations that meet user requirements for healthy mealset.
        </Typography>
        <Typography color="grey">

        One of the biggest changes I did to the project was to incorporate GPT-2 into our pipeline. This was a decision that I made after researching the latest AI technologies and finding that GPT-2 had incredible potential for natural language processing. And these changes bring a great benefit to our project as they undoubtly increased the accuracy of detecting intent and entity.
        </Typography>
        <Typography color="grey">

        Overall, I believe that our prototype for the chatbot agent project was successful. We were able to create a tool that can help people make better choices about their health and well-being, and we did so using cutting-edge AI technology. 
        </Typography>
        </Box>
        </Mainbox>

        </Box></>)
}