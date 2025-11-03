/* eslint import/no-webpack-loader-syntax: off */
import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, Link, Container } from "@mui/material";
import React, { ReactNode } from "react";
import exp from '../experience.json'


class ExperienceList extends React.Component{
    ParseDescription(s:string){
        const base=s.split(/#h\{.[^\{]*\}\{.[^\{]*\}/);
        const l=Array.from(s.matchAll(/#h\{.[^\{]*\}\{.[^\{]*\}/g)).map((a)=>a[0]);
        const inner:JSX.Element[]=[];
        var count=0;
        for(const piece of base){
            inner.push(<>{piece}</>);
            if(count<l.length){
                console.log(l[count]);
                const temp=Array.from(l[count].matchAll(/\{.[^\{]*\}/g)).map((a)=>a[0].substring(1,a[0].length-1    ));
                inner.push(<Link href={temp[0]} color="text.secondary" display="inline">{temp[1]}</Link>)
                count++;
            }
        }
        return (<Typography variant="body2" color="text.secondary" display="inline" sx={{"margin-left":"10px","margin-top":"5px"}}>
        {inner}
    </Typography>);
    }
    render(){
        var count=0;
        var nestedCount=1;
        const CardHolder:JSX.Element[]=[];
        const ItemHolder:JSX.Element[][]=[[]];
        for(const group in exp){
            for(const event in exp[group]){
                ItemHolder[count].push( 
                    <Container sx={{"display":"flex","flex-direction":"column","margin-bottom":"10px"}}>
                        <Typography variant="body2" color="text.secondary" display="flex" justifyContent="space-between">
                            <Typography variant="body2" color="text.secondary" display="inline" sx={{ fontWeight: 'bold' }}>{event}</Typography>
                            <Typography variant="body2" color="text.secondary" display="flex" sx={{ fontWeight: 'bold',textAlign:"right" }}>{exp[group][event]["year"]}</Typography>
                        </Typography>
                        {("description" in exp[group][event])?(this.ParseDescription(exp[group][event]["description"])):<></>}
                    </Container>);
                ++nestedCount;
            }
            CardHolder.push(
                <Card  variant="outlined" sx={{width:"75%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)","margin-left":"auto","margin-right":"auto","margin-top":"20px"}}>
                    <CardHeader title={group}/>
                    <CardContent>
                        {ItemHolder[count]}
                    </CardContent>
                </Card>);
            count+=1;
            nestedCount=1;
            ItemHolder.push([]);
        }
        return (<>{CardHolder}</>);
    }
}


export default function Publication(){
    return (
    <Container sx={{"padding-bottom":"10px"}}>
        <Typography variant="h3" color="text.secondary" sx={{"margin-left":"auto","margin-right":"auto","margin-top":"20px"}}>Experience</Typography>
        <Typography  variant="body1" color="text.secondary" sx={{"margin-top":"10px","flex-wrap":"wrap"}} align="left">
            A brief summary of my experience in various aspects, all events are arranged in chronological order and it may not be up-to-date.
        </Typography>
        <ExperienceList/>
    </Container>);
}