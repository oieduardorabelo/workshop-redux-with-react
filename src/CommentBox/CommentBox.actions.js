const scope = 'CommentBox';

export const SAVE_COMMENT = scope + '/SAVE_COMMENT'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: {
          id: Date.now(),
          text: comment
        }
    }
}
