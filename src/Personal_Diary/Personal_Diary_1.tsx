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
const Mainbox=styled('div')(({ theme }) => ({

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
const SubBox=styled('div')(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        width:"80%"
    },
    [theme.breakpoints.up('md')]: {
        width:"40%"
    }
  }));

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
            We discussed few different inconvenience part in HKUST and we proposed several ideas.
            </Typography>
            <Box width="100%" display="flex" flexDirection= 'column' alignItems="align-start">
            <Typography variant="body1" color="grey">
            1) Toilet System (show nearest toilet with empty slot)
            </Typography>
            <Typography variant="body1" color="grey">
            2) Canteen System (display number of avaliable dishes)
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
                Based on our personal experience, the toilet in HKUST is always overcrowded during lesson break.
                Thus, when we want to go toilet, we usually reqired to go to the next toilet you know, but 
                the this issue occurs again and again with an endless trial.
                However, the usage of toilet is not evenly distributed. On the other words, Some toilets in the campus always have its cubicles preoccupied, while there are still some vacancies in other toilets.
                It is inconvenient when you go into toilet and find out all cubicles are occupied.
            </Typography>
            <Typography variant="body1" color="grey">
                We Observed that the situation where students are entering and leaving the washroom within a short period. This happens especially around 12:00, 13:30, 15:00, which are breaks between lectures. 
                Some lesser-known washrooms are not utilized as frequently as washrooms near hotspots, eg. Library, LT-A, LG1 ,canteen…

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
              <ListItemIcon>
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
              <ListItemIcon>
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
              <ListItemIcon>
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
            Students / Staff are now able to know where is the closest washroom with empty slot !!
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
                We did a questionnaire between our firends to identify is it really a need of students and is our solution help to bridge it. 
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
        This project is practical and meet the real world requirement as we need to build a feasible idea with details to bridge the real world problem. "User-firendly" is always a problem of engineer. Like for around 15 years ago, people using their phones with phyiscal keys and almost all engineer not trying to make it more user-firendly in UI, Control but only trying to minimze the size. The only company to make the UI more fit human's expectation is Apple, and that makes it pops to one of the world biggest company. In this project, we are going to do the similar things. Find out what is not user-friendly, and think a idea to fix. These process brings me a thinking mindset, how to make our life better. There are not nesscary a big changes, a game changer but enhance our life a bit more.
        During the project, I proposed this idea about toilet. And luckily, all of my groupmates agree with it and we started brainstorming how to perfect the idea, how to make the toilet system meet our expectation. And our answer is written above. No need a big change, but makes our life better.
        </Typography>
        </Box>
        </Mainbox>

        </Box>
        )
}