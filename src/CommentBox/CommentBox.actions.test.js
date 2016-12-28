import { SAVE_COMMENT, saveComment } from './CommentBox.actions'

describe('CommentBox.actions', () => {
    it('SAVE_COMMENT returns correct payload', () => {
        const data = 'new comment'
        const payload = {
          type: SAVE_COMMENT,
          payload: {
            id: Date.now(),
            text: data,
          }
        }
        const action = saveComment(data)
        expect(action).toEqual(payload)
    })
})
