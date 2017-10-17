import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
        HELLo
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/about" component={About}/>
            {/* <Route path="/topics" component={Topics}/> */}
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
