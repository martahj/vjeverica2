import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Splash from './routes/Splash';
import About from './routes/About';
import Performances from './routes/Performances';
import Navigation from './Navigation';
import { appContainerStyle } from './style';

injectTapEventPlugin();

const App = () => (
  <div style={appContainerStyle}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Navigation />
          <Route exact path='/' component={Splash}/>
          <Route path='/about' component={About}/>
          <Route path='/performances' component={Performances}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </div>
);

export default App;
