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
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>


            <Route path="/about" component={About}/>

          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
