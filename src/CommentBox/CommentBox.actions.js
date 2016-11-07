const scope = 'CommentBox';

export const SAVE_COMMENT = scope + '/SAVE_COMMENT'

export function saveComment(data) {
    return {
        type: SAVE_COMMENT,
        payload: data
    }
}
