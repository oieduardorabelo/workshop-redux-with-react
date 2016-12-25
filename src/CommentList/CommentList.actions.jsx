const scope = 'CommentList';

export const DELETE_COMMENT = scope + '/DELETE_COMMENT'

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        payload: { id }
    }
}
