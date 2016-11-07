import { SAVE_COMMENT } from '../CommentBox/CommentBox.actions'
import CommentListReducers from './CommentList.reducers'

describe('CommentList.reducers', () => {
    it('returns default state when type doesnt match', () => {
        const action = { type: 'FOO', payload: '' };
        const reducer = CommentListReducers(undefined, action)
        expect(reducer).toEqual({ comments: [] })
    })

    it('when state is empty, SAVE_COMMENT add new comment', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
        const reducer = CommentListReducers(undefined, action)
        expect(reducer).toEqual({ comments: [ 'new comment' ] })
    })

    it('when state already have comment, SAVE_COMMENT concat new comment', () => {
        const action = { type: SAVE_COMMENT, payload: 'other comment' };
        const reducer = CommentListReducers({ comments: ['new comment'] }, action)
        expect(reducer).toEqual({ comments: [ 'new comment', 'other comment' ] })
    })
})
