import React, { Component } from 'react';

import CommentBox from './CommentBox/CommentBox'
import CommentList from './CommentList/CommentList'

export class App extends Component {
  render() {
    return (
      <main>
        <CommentBox />
        <CommentList />
      </main>
    )
  }
}

export default App;
