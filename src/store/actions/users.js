import {RECEIVE_USERS,
        ADD_ANSWER_TO_USER,
        ADD_QUESTION_TO_USER 
} from '../actionTypes'

export function reciveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser(authUser, questionid, answer){
    return{
        type: ADD_ANSWER_TO_USER,
        authUser,
        questionid,
        answer
    }
}

export function addQuestionToUser(id, author){
    return {
        type: ADD_QUESTION_TO_USER,
        id,
        author
    }
}

