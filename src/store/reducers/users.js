import {
    RECEIVE_USERS,
    ADD_ANSWER_TO_USER,
    ADD_QUESTION_TO_USER
} from '../actionTypes'

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(action.id)
                }
            }
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.questionId]: action.answer
                    }
                }
            }
        default:
            return state
    }
}