import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteComment } from './CommentList.actions';

export class CommentList extends Component {
  handleDelete = (id) => {
    this.props.handleDelete(id);
  }

  render() {
    const list = this.props.comments.map(
        (item, index) => (
            <li key={index}>{item.text} <button onClick={() => this.handleDelete(item.id)} type="button">Delete</button></li>
        )
    )

    return <ul>{list}</ul>
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.CommentListReducers.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (commentId) => {
      dispatch(deleteComment(commentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
