import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './components/contact.jsx';
import Home from './components/home.jsx';
import Projects from './components/projects/projects.jsx';
import Experience from './components/experience/experience.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
      tabIndex: 0
    }

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(index) {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleTabChange}>

            <Tab label="Home" value={0}/>
            <Tab label="Projects" value={1}/>
            <Tab label="Experience" value={2}/>
            <Tab label="Contact" value={3}/>

          </Tabs>
          <SwipeableViews
            index={this.state.tabIndex}
            onChangeIndex={this.handleTabChange}>
            <Home />
            <Projects />
            <Experience />
            <Contact />
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
