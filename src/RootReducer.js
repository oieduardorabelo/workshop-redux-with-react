import { combineReducers } from 'redux'

import CommentListReducers from './CommentList/CommentList.reducers'

const RootReducer = combineReducers({
    CommentListReducers
})

export default RootReducer
