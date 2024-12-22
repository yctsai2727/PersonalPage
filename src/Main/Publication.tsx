/* eslint import/no-webpack-loader-syntax: off */
import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, Link, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
//import bib from '../yctsai.bib';
//import {parseBibFile, normalizeFieldValue} from "bibtex";

var bib = require('!!raw-loader!../yctsai.bib');
var bibtexParse = require('bibtex-parse-js');


//const PathToBib='../yctsai.bib';

interface BibObject {
    citationKey : string,
    entryType: string,
    entryTags: {
        title: string,
        year: string,
        author: string,
        journal: string
    }
}

class PublicationList extends React.Component{
    ParseAuthor(authorlist:string){
        const lists=authorlist.split(' and ');
        var result="";
        for(const item of lists){
            const names=item.split(', ');
            const surname=names[0];
            var temp="";
            for(const name of names[1].split(' ')){
                if(name==surname) continue;
                if(temp.length>0) temp+=".";
                temp+=name.charAt(0).toUpperCase();
            }
            if(result.length>0) result+=", ";
            result+=temp+'. '+surname;
        }
        return result;
    }
    render(){
        //console.log(bib.default.toString());
        const lists=bibtexParse.toJSON(bib.default.toString());
        lists.sort((a:BibObject,b:BibObject)=>{
            return Number(b.entryTags.year)-Number(a.entryTags.year);
        });
        //  console.log(sortedlist);
        var year=lists[0].entryTags.year;
        var count=0;
        var nestedCount=1;
        const CardHolder:JSX.Element[]=[];
        const ItemHolder:JSX.Element[][]=[[]];
        for(const item of lists){
            //console.log(item);
            if(item.entryTags.year!=year){
                CardHolder.push(
                    <Card  variant="outlined" sx={{width:"75%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)","margin-left":"auto","margin-right":"auto","margin-top":"30px"}}>
                        <CardHeader title={(year=="3001")?"submitted":year}/>
                        <CardContent>
                            {ItemHolder[count]}
                        </CardContent>
                    </Card>);
                year=item.entryTags.year;
                count+=1;
                nestedCount=1;
                ItemHolder.push([]);
            }
            ItemHolder[count].push( 
            <Typography variant="body2" color="text.secondary" display="flex" flexDirection="column" sx={{"margin-bottom":"10px"}}>
                <Typography variant="body2" color="text.secondary" display="flex">
                    {nestedCount.toString()+'. '+this.ParseAuthor(item.entryTags.author)}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex" sx={{ fontWeight: 'bold' }}>
                    {item.entryTags.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" display="flex">
                    {item.entryTags.journal}&nbsp;{(item.entryTags.doi)?<a href={item.entryTags.doi} rel="noopener noreferrer" target="_blank">[DOI]</a>:<></>}&nbsp;{(item.entryTags.open)?<a href={item.entryTags.oplink} rel="noopener noreferrer" target="_blank">[{item.entryTags.open}]</a>:<></>}
                </Typography>
            </Typography>);
            ++nestedCount;
        }
        CardHolder.push(
            <Card  variant="outlined" sx={{width:"75%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)","margin-left":"auto","margin-right":"auto","margin-top":"30px"}}>
                <CardHeader title={(year=="3001")?"submitted":year}/>
                <CardContent>
                    {ItemHolder[count]}
                </CardContent>
            </Card>);
        return (<>{CardHolder}</>);
    }
}


export default function Publication(){
    return (
    <Container sx={{"padding-bottom":"10px"}}>
        <Typography variant="h3" color="text.secondary" sx={{"margin-left":"auto","margin-right":"auto","margin-top":"20px"}}>Publications</Typography>
        <Typography  variant="body1" color="text.secondary" sx={{"margin-top":"10px","flex-wrap":"wrap"}} align="left">
            Hopefully it should be up-to-date, for more details check my <Link href="https://dblp.org/pid/362/5780" color="text.secondary" display="inline">DBLP</Link> page. For some of the papers, in particular those in the field of theoretical computer science, the author names are arranged in alphabetical order.
        </Typography>
        <PublicationList/>
    </Container>);
}