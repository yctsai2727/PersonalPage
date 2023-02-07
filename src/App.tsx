import './App.css';
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Topbar from './Main/Topbar';
import Profile from './Main/Profile';
import Introduction from './Main/Introduction';
import Personal_Diary from './Main/PersonalDiary';
import AboutMe from './Main/AboutMe';
import Main from './Main/Main';
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
              <Route path="/app/*">
                <Route path="" element={<Profile />}></Route>
                {/*<Route path="Introduction" element={<Introduction/>}></Route>*/}
                <Route path="Personal_Diary" element={<Main child={<Personal_Diary/>} />}></Route>
                <Route path="About_Me" element={<Main child={<AboutMe/>} />}></Route>
                <Route path="*" element={<Navigate to="/app" replace={true} />}></Route>
              </Route>
              <Route path="*" element={<Navigate to="/app" replace={true} />}></Route>
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
