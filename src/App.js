import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './Components';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, LinksPage, BylawsPage } from './routes';
import Minutes from './STORE';
// import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <div>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
            <h1>
              Las Palmas Grand Residents' Association - LPGRA
            </h1>
          </header>
          <main className="App__main">
            <Switch>
              <Route
                exact
                path="/"
                component={LandingPage}
              />
              <Route
                path="/minutes"
                component={Minutes}
              />
              <Route
                path="/links"
                component={LinksPage}
              />
              <Route
                path="/bylaws"
                component={BylawsPage}
              />
            </Switch>
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
