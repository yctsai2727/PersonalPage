import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import CoverImage from '../Image/turbulence.png'
import Myimage from '../Image/20230125_122649.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import data from '../job_exp.json'
//import { Link } from "react-router-dom";
const style={
    coverimagebox:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverImage})`,
        backgroundSize: '100% min(50vh , 280px)',
        backgroundRepeat: 'no-repeat',
        height:"min(50vh , 280px)"        
    }
}

export default function Home () {

    return (
        <Card  variant="outlined" sx={{width:"75%", padding:"8px", borderRadius:"16px", mb:"30px",boxShadow:"2px 5px rgba(0,0,0,0.05)","margin-left":"auto","margin-right":"auto"}}>
            <CardHeader        
            title="About Me"
                    />
        <CardContent>
        <Typography variant="body2" color="text.secondary" display="inline" align="left" sx={{"flex-wrap":"wrap"}}>
        My name is Yun Chen Tsai (蔡昀宸), aka Vincent. I was born in Taiwan and had most of my study in Hong Kong. I graduated from&nbsp;<Link href="https://hkust.edu.hk/" color="text.secondary" display="inline">Hong Kong University of Science and Technology (HKUST)</Link>&nbsp;in January, 2024 and started my Ph.D. study at <Link href="https://www.nii.ac.jp/graduate/" color="text.secondary" display="inline">National Institute of Informatics (NII)</Link>&nbsp;under the supervision of Prof. <Link href="https://group-mmm.org/~ichiro/index.html" color="text.secondary" display="inline">Ichiro Hasuo</Link>&nbsp;in October, 2024.
        </Typography>
        <Typography variant="body2" color="text.secondary" display="flex">
        &nbsp;
        </Typography>
        <Typography variant="body2" color="text.secondary" display="inline" align="left" sx={{"flex-wrap":"wrap"}}>
          My research interest falls in the broad area of scientific computation and formal methods. The main focus of my research aim to utilize tools from diverse aspect of mathematics including but not limited to differential equations, optimization techniques, probability theory, algebraic method to develop novel frameworks and improve existing solutions on problems lying in fields like dynamical system, model checking and program synthesis. A recent focus is on the verification of probabilistic and quantum model. See my <Link href="/Experience" color="text.secondary" display="inline">experience</Link> and <Link href="/Publications" color="text.secondary" display="inline">publications</Link> pages for more details.
        </Typography>
      </CardContent>
        </Card>
    )
}

// class JobListitem extends React.Component{
//   render(){
//     const temp:JSX.Element[]=[];
//     for(const key in data){
//         temp.push(
//     <ListItem alignItems="flex-start">
//         <ListItemText
//           primary={
//             <React.Fragment>
//             <Box display="flex" width="100%" justifyContent="space-between">
//                 <Typography
//             component="span"
//             color="text.primary"
//           >
//             {data[key]['post']}
//             </Typography>
//             <Box display="flex" alignItems="center" flexDirection="column">
//             <Typography
//             color="grey"
//             variant="body2"
//           >
//             {data[key]['name']}
//             </Typography>
//             <Typography
//             color="grey"
//             variant="body2"
//           >
//             {data[key]['year']}
//             </Typography>
//             </Box>
//                 </Box>
            
//             </React.Fragment>
//             }

//           secondary={
//             <React.Fragment>
//               <Typography
//                 variant="body2"
//                 color="grey"
//                 paragraph={true}
//                 sx={{ whiteSpace: 'pre-line'}}
//               >
//                 {data[key]['despcription']}
//               </Typography>
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//         )
//     }
//     return (<>{temp}</>)
//   }
// }