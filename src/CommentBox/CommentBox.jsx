import React, { Component } from 'react';

import { connect } from 'react-redux'
import { saveComment } from './CommentBox.actions'

export class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)

    this.state = {
      comment: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      id: Date.now(),
      text: this.state.comment
    })
    this.setState({ comment: '' })
  }

  handleChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(event)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (newComment) => {
      dispatch(saveComment(newComment))
    }
  }
}

export default connect(null, mapDispatchToProps)(CommentBox)
