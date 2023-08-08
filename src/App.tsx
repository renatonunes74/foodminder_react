import React, { useEffect} from 'react';
import logo from './logo.svg';
import {Grid, AppBar, Toolbar, Typography, Button, Tabs, Tab, Box, Paper} from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import { activateTextTruncateScroll } from "text-truncate-scroll"
/** import { useDencrypt } from "use-dencrypt-effect"; REMOVER 
import { TextGlitchEffect } from "react-text-glitch-effect"; REMOVER **/
import "@fontsource/orbitron";
import "@fontsource/titillium-web";
import { Glitch, Typewriter } from "react-teffex";

import './App.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);
 //  <ThemeProvider theme={theme}>
	// </ThemeProvider>

function App() {
  return (
  <>
  <AppBar position="static" className="preto">
  <Toolbar variant="dense">
    <Button className="botao1 diagonal-button">
      <p className="text">
	  Menu
	  </p>
    </Button>
  </Toolbar>
</AppBar>

  <Grid container className="barra">
  <Grid item xs={5}>
  <Typography noWrap variant="h3">
  <Glitch alphabet text="PLANEJAMENTO"/>
  </Typography>
  <Typography noWrap variant="body1">2023-08-02</Typography>
  <Tabs
  aria-label="wrapped label tabs example"
>
  <Tab className="botao"
    value="one"
    label="RECEITA"
    wrapped
  />
  <Tab className="botao"
    value="one"
    label="INFORMAÇÃO"
    wrapped
  />
  <Tab className="botao"
    value="one"
    label="RECEITA"
    wrapped
  />
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>
  <Typography noWrap variant="h4">
  <Glitch alphabet text="RECEITA"/>
  </Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="body1">- blah</Typography>
  <Typography noWrap variant="h4">
  <Glitch alphabet text="INFORMAÇÕES"/></Typography>
  <Typography noWrap variant="body1">2023-08-02</Typography>
  </Grid>
  <Grid item xs={7} justifyContent="center" textAlign="center">
  <Grid container spacing={1}>
  <Grid item xs={12} sm={6}>
  <Box className="card">
  <Typography noWrap variant="body1">
  <Glitch alphabet text="Café da Manhã"/>
  </Typography>
  <Typography noWrap className="alimentos" variant="h4">
  <Typewriter
        text="Pão com Queijo"
		cursorSettings={{color: "transparent"}}
      />
  </Typography>
  <img src="https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg"/>
  </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
  <Grid container>
  <Grid item xs={12} sm={6}>
  <Box className="card">
  <Typography noWrap variant="body1">
  <Glitch alphabet text="Almoço"/>
  </Typography>
  <Typography noWrap className="alimentos" variant="h5">
  <Typewriter
        text="Lasanha"
		cursorSettings={{color: "transparent"}}
      />
  </Typography>
  <img src="https://static.itdg.com.br/images/1200-675/5a4887ec15a6bc742554f04def00ed4d/325115-original.jpg"/>
  </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
  <Box className="card">
  <Typography noWrap variant="body1">
  <Glitch alphabet text="Café da Tarde"/>
  </Typography>
  <Typography noWrap className="alimentos" variant="h5">
  <Typewriter
        text="Café"
		cursorSettings={{color: "transparent"}}
      />
  </Typography>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"/>
  </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
  <Box className="card">
  <Typography noWrap variant="body1">
  <Glitch alphabet text="Janta"/>
  </Typography>
  <Typography noWrap className="alimentos" variant="h5">
  <Typewriter
        text="Feijoada"
		cursorSettings={{color: "transparent"}}
      />
  </Typography>
  <img src="https://assets.unileversolutions.com/recipes-v2/54349.jpg"/>
  </Box>
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  </Grid>
  </>
  );
}

export default App;
