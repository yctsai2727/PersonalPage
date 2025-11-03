import './App.css';
import { useLocation, Routes, Route, Navigate, Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { LinkProps } from '@mui/material/Link';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Topbar from './Main/Topbar';
import Home from './Main/Home';
import Main from './Main/Main';
import Publication from './Main/Publication'
import Experience from './Main/Experience'
const theme = createTheme({
  palette: {
    primary: {
      main: '#E5EDF1',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
function App() {

  
  return (
    <>
    <ThemeProvider theme={theme}>
    <Topbar />
    <Routes>  
        <Route path="/" element={<Main child={<Home/>} />}></Route>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/Publications" element={<Publication/>}></Route>
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
