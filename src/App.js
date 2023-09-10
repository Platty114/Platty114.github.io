import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from './Pages/About/About'
import Experience from './Pages/Experience/Experience'
import Projects from './Pages/Projects/Projects';
import { TopBar } from './Composistions/TopBar/TopBar'
import { ResponsiveBottomBar } from './Composistions/BottomBar/BottomBar'

import { Paper, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import { themeOptions } from './theme'

import './App.css'

function App() {
  const 
    storedMode = localStorage.getItem('mode'),
    [mode, setMode] = React.useState(
      storedMode ? storedMode : 'light'
    );

  React.useEffect(() => {
    localStorage.setItem('mode', String(mode));
  }, [mode]);

  const 
    theme = createTheme(themeOptions(mode));

  return (
    <div className="App">
      <Container className ={mode} disableGutters maxWidth={false}>
        <ThemeProvider theme={theme}>
          <header className="App-header">
            <TopBar themeOptions={theme} setMode={setMode} />
            <Container maxWidth={false}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="About" element={<About />} />
                  <Route path="Experience" element={<Experience/>} />
                  <Route path="Projects" element={<Projects/>} />
                </Routes>
              </BrowserRouter>
            </Container>
            
          </header>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
