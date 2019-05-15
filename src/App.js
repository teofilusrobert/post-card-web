import React, { Component } from 'react';
// import logo from './logo.svg';
import ListCardPost from './components/list/card-post';
import { GetPostComplete } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount () {
    GetPostComplete().then( posts => this.setState({ posts }));
  }

  render () {
    const { posts } = this.state;
    console.log(posts);
    return (
      <div className="App">
        <header className="App-header">
          <ListCardPost posts={posts}></ListCardPost>
        </header>
      </div>
    );
  }
}

export default App;
