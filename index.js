import './style';
import { Component } from 'preact';
import Router from 'preact-router';
import Main from './components/main/main';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Main path="/:query?" />
        </Router>
      </div>
    );
  }
}
