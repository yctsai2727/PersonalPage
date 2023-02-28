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
import data from '../personal_diary.json'
import Personal_Diary_1 from "../Personal_Diary/Personal_Diary_1";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AboutMe from "./AboutMe";
import Personal_Diary_2 from "../Personal_Diary/Personal_Diary_2";
import Personal_Diary_3 from "../Personal_Diary/Personal_Diary_3";
const style={
    container:{
        minHeight:"30vh",
        width:"100%",
        padding:"8px", 
        borderRadius:"16px", 
        mb:"30px",
        boxShadow:"2px 5px rgba(0,0,0,0.05)"
    },
    diarycard:{
        width:"60%",
        padding:"8px", 
        borderRadius:"16px", 
        mb:"30px",
        boxShadow:"2px 5px 2px 5px rgba(0,0,0,0.05)"
    }
}

class DiaryItem extends React.Component{
    render(){
        const tempdata:{"title":string,"time":number,"despcription":string}[]=[]
        const temp:JSX.Element[]=[];
        for(const key in data){
            tempdata.push(data[key])
        }
        tempdata.sort(function(a,b){
            return b.time-a.time
        })
        let i=0;
        tempdata.forEach((a)=>{
            let tempt=new Date(a.time*1000)
            let time={
                'year':tempt.getFullYear(),
                'month':tempt.getMonth()+1,
                'date':tempt.getDate(),
                'hour':tempt.getHours(),
                'mins':tempt.getMinutes()
            }
            console.log(time)
            temp.push(
                <Box display="flex" ml="8px" mr="8px" justifyContent={i%2?"flex-start":"flex-end"}>
                <Card sx={{...style.diarycard,...{"borderRadius":i%2?"16px 16px 16px 0px":"16px 0px 16px 16px"}}}>
                    <Box ml="16px">
                        <Typography variant="h6">{a.title}</Typography>
                        <Typography variant="body2" color="grey">{time.year+"/"+time.month+"/"+time.date+" "+(time.hour>9?time.hour:"0"+time.hour)+":"+(time.mins>9?time.mins:"0"+time.mins)}</Typography>
                        <Divider variant="fullWidth" />
                        <Box pt="8px">
                        <Typography variant="body2" color="grey">{a.despcription}</Typography>
                        </Box>
                    </Box>

                </Card>
                </Box>
            )
            i+=1;
        })
        return <>{temp}</>
    }
}
export default function Personal_Diary () {
    const [project, setproject] = React.useState<JSX.Element>(Personal_Diary_1);
    const [projectnum, setprojectnum] = React.useState(0);

    return (
        <Card sx={style.container}>
            <CardHeader        
            title="Personal Diary"  
             />
             <CardContent >
                 <Box>
                 <Tabs
                   variant="scrollable"
                   scrollButtons="auto"

                 value={project} onChange={(e,a)=>{
                    switch(a){
                        case 0: 
                            setprojectnum(0)
                            setproject(Personal_Diary_1);
                            break;
                        case 1: 
                            setprojectnum(1)
                            setproject(Personal_Diary_2);
                            break;
                        case 2: 
                            setprojectnum(2)
                            setproject(Personal_Diary_3);
                            break;

                    }
                 }} aria-label="basic tabs example">
                    <Tab label="Project 1" sx={{borderStyle:'solid',  borderColor:projectnum==0?'grey':"transparent" ,borderWidth:'0px 0px 2px 0px'}}/>
                    <Tab label="Project 2" disabled sx={{borderStyle:'solid',  borderColor:projectnum==1?'grey':"transparent" ,borderWidth:'0px 0px 2px 0px'}}/>
                    <Tab label="Project 3" disabled sx={{borderStyle:'solid',  borderColor:projectnum==2?'grey':"transparent" ,borderWidth:'0px 0px 2px 0px'}} />
                </Tabs>
                </Box>
            </CardContent>
            <CardContent>
             {
             project
             }
            </CardContent>
        </Card>
    )
}