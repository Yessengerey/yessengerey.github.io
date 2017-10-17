import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRoute as Router, Route, Link} from 'react-router-dom';

import About from './components/about.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ''
    }
  }


  render() {
    return (
      <div>
        <Router>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/topics">Topics</Link></div>
        </Router>


        <Route path="/about" component={About}/>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
