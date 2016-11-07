import { SAVE_COMMENT, saveComment } from './CommentBox.actions'

describe('CommentBox.actions', () => {
    it('SAVE_COMMENT returns correct payload', () => {
        const data = 'new comment'
        const action = saveComment(data)
        expect(action).toEqual({ type: 'SAVE_COMMENT', payload: 'new comment' })
    })
})
