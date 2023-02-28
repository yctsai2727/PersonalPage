import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { ReactNode } from "react";
import Mindmap from '../Image/mindmap.png'
import Chart1 from '../Image/chart1.png'
import Chart2 from '../Image/chart2.png'
import Storyboard from '../Image/storyboard.png'

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


export default function Personal_Diary_1 () {
    return (
        <Box>
        <Box display="flex" justifyContent= 'center' pb="3rem">
        <Typography variant="h6">“If Toilet System on campus were more user-friendly”</Typography>
        </Box>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>BRAINSTORMING</Typography>
        
        </Box>
        <Mainbox >
        <SubBox>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Typography variant="body1" color="grey">
            We discussed a few different inconvenience parts in HKUST and we proposed several ideas.
            </Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">
            <Typography variant="body1" color="grey">
            1) Toilet System (show the nearest toilet with an empty slot)
            </Typography>
            <Typography variant="body1" color="grey">
            2) Canteen System (display number of available dishes)
            </Typography>
            <Typography variant="body1" color="grey">
            3) Classroom booking System (book empty classroom)
            </Typography>
            </Box>
            <Typography variant="body1" color="grey">
            After our voting, we decided to take Toilet System as our project target
            </Typography>
            </Box>
        </SubBox>
        <SubBox>
            <Box maxWidth="100%">
            <img width="100%" src={Mindmap}/>
            </Box>
        </SubBox>
        </Mainbox>

        <Box width="100%" display="flex" flexDirection= 'column' alignItems="center" pb="3rem">
            <Box width="80%" display="flex" flexDirection= 'column' alignItems="center">
            <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>WHAT'S THE PROBLEM</Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">

            <Typography variant="body1" color="grey" pb="1rem">
            Based on our personal experience, the toilet in HKUST is always overcrowded during lesson breaks. Thus, when we want to go toilet, we are usually required to go to the next toilet you know, but this issue occurs again and again with an endless trials. However, the usage of toilets is not evenly distributed. In the other words, Some toilets on the campus always have their cubicles preoccupied, while there are still some vacancies in other toilets. It is inconvenient when you go into the toilet and find out all cubicles are occupied.
            </Typography>
            <Typography variant="body1" color="grey">
            We observed a situation where students are entering and left the washroom within a short period. This happens especially around 12:00, 13:30, and 15:00, which are breaks between lectures. Some lesser-known washrooms are not utilized as frequently as washrooms near hotspots, eg. Library, LT-A, LG1 canteen…
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
                On-campus toilet user
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
                  Locating an available toilet cubicle during rush hours
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
                Ease the process of searching for an available toilet slot                </Typography>
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
            Show available toilet cubicles on the app directly embed into HKUST Student / Staff App
            <ListItem  style={{ display: 'list-item' }}>
            Students / Staff are now able to know where is the closest washroom with an empty slot !!
            </ListItem>
            <ListItem style={{ display: 'list-item' }}>
                Simplistic UI that is intuitive and responsive
                <ListItem  style={{ display: 'list-item' }}>
                Students may want to see the result quickly
                </ListItem>
                <ListItem style={{ display: 'list-item' }}>

                latency response time within seconds
                </ListItem>

            </ListItem>
            </Typography>
            </Box>
            </SubBox>
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>VERIFY THE NEEDS</Typography>
        
        </Box>
        <Mainbox>
            
            <SubBox>
            <Typography color="grey">
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="center">

            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">
            We did a questionnaire among our friends to identify if is it a need for students and is our solution helps to bridge it. From the result, we can find that the majority faced a similar difficulty and agree that our solution may bring benefit to it.
            </Box>
            </Box>
            </Typography>
            </SubBox>
            <SubBox>
                <Box width="100%">
                <img width="100%" src={Chart1}/>
                </Box>
                <Box width="100%">
                <img width="100%" src={Chart2}/>
                </Box>
            </SubBox>
        </Mainbox>
        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>OUR SOLUTION</Typography>
        
        </Box>
        <Mainbox>
            <Box width="80%">
            <img width="100%" src={Storyboard}/>
            </Box>
        </Mainbox>

        <Box width="100%" display="flex" justifyContent="center">
        <Typography variant="h6" color="grey" mb="1rem" width="fit-content" sx={{borderStyle:'solid',  borderColor:'grey' ,borderWidth:'0px 0px 2px 0px'}}>PERSONAL REFLECTION</Typography>
        
        </Box>
        <Mainbox>
        <Box width="80%">
        <Typography color="grey">
        This project is practical and meets the real-world requirement as we need to build a feasible idea with details to bridge the real-world problem. "User-friendly" is always a problem for engineers. Around 15 years ago, people used their phones with physical keys and almost all engineers not trying to make it more user-friendly in UI, Control but only tried to minimize the size. The only company to make the UI fit human expectation is Apple, and that makes it pops into one of the world's biggest companies. In this project, we are going to do similar things. Find out what is not user-friendly, and think of an idea to fix it. This process brings me a thinking mindset, on how to make our life better. There are not necessarily big changes or game changers but enhance our life a bit more. During the project, I proposed the idea of a toilet system. And luckily, all of my groupmates agree with it and we started brainstorming how to perfect the idea, and how to make the toilet system meet our expectations. And our answer is written above. No need for a big change, but makes our life better.
        </Typography>
        </Box>
        </Mainbox>

        </Box>
        )
}