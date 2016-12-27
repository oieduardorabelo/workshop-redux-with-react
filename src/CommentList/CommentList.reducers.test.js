import { SAVE_COMMENT } from '../CommentBox/CommentBox.actions'
import CommentListReducers from './CommentList.reducers'

describe('CommentList.reducers', () => {
    it('returns default state when type doesnt match', () => {
        const action = { type: 'FOO', payload: '' }
        const reducer = CommentListReducers(undefined, action)
        expect(reducer).toEqual({ comments: [] })
    })

    it('when state is empty, SAVE_COMMENT add new comment', () => {
        const payload = { id: Date.now(), text: 'new comment' }
        const action = { type: SAVE_COMMENT, payload: payload }
        const reducer = CommentListReducers(undefined, action)
        expect(reducer).toEqual({ comments: [ payload ] })
    })

    it('when state already have comment, SAVE_COMMENT concat new comment', () => {
        const payload = { id: Date.now(), text: 'new comment' }
        const initialState = {
          comments: [
            { id: Date.now(), text: 'other comment' }
          ]
        }
        const action = { type: SAVE_COMMENT, payload: payload }
        const reducer = CommentListReducers(initialState, action)
        const finalState = Object.assign({}, initialState)
        finalState.comments = finalState.comments.concat(payload)
        expect(reducer).toEqual(finalState)
    })
})
