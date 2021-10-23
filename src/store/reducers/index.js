import { combineReducers } from 'redux'

import authUser from '../reducers/authedUsers'
import users from '../reducers/users'
import questions from '../reducers/questions'


export default combineReducers({
    authUser,
    users,
    questions
})