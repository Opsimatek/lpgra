import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Nav } from './Components';
import { Switch, Route } from 'react-router-dom';
import { 
  LandingPage, 
  LinksPage, 
  BylawsPage, 
  MinutesListPage, 
  BoardPage, 
  ContactPage, 
  MeetingPage, 
  NewslettersListPage, 
  ElectionsPage, 
  NeighborhoodWatchPage, 
  RequestFormPage } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <div className="Nav">
            <Nav />
          </div>
          <main className="App__main">
            <Switch>
              <Route
                exact
                path="/"
                component={LandingPage}
              />
              <Route
                exact
                path="/minutes"
                component={MinutesListPage}
              />
              <Route
                path="/minutes/:minutesId"
                component={MeetingPage}
              />
              <Route
                path="/links"
                component={LinksPage}
              />
              <Route
                path="/bylaws"
                component={BylawsPage}
              />
              <Route
                path="/board"
                component={BoardPage}
              />
              <Route
                path="/contact"
                component={ContactPage}
              />
              <Route
                path="/newsletters"
                component={NewslettersListPage}
              />
              <Route
                path="/elections"
                component={ElectionsPage}
              />
              <Route
                path="/neighborhoodWatch"
                component={NeighborhoodWatchPage}
              />
              <Route
                path="/requestForm"
                component={RequestFormPage}
              />
            </Switch>
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
