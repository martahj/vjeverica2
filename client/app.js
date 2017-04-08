import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Splash from './Splash';
import About from './About';
import Navigation from './Navigation';
import { appContainerStyle } from './style';

const App = () => (
  <div style={appContainerStyle}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Navigation />
          <Route exact path='/' component={Splash}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </div>
);

export default App;
