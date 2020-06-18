import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import Minutes from './STORE';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          LPGRA
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
