import { SAVE_COMMENT } from '../CommentBox/CommentBox.actions'
import { DELETE_COMMENT } from '../CommentList/CommentList.actions'

const defaultState = {
    comments: []
}

function CommentListReducers(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case SAVE_COMMENT:
            return {
                comments: state.comments.concat(payload)
            }
        case DELETE_COMMENT:
            return {
                comments: state.comments.filter(comment => comment.id !== payload.id)
            }
        default:
            return state
    }
}

export default CommentListReducers
