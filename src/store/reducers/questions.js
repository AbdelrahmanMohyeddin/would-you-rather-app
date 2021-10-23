import { 
    RECEIVE_QUESTIONS,
    ADD_ANSWER_TO_QUESTION,
    ADD_QUESTION
} from '../actionTypes'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case ADD_ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat(action.authUser)
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}