import {
    RECEIVE_QUESTIONS,
    ADD_ANSWER_TO_QUESTION,
    ADD_QUESTION,
} from '../actionTypes'

export function reciveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addAnswerToQuestion(authUser, questionId,answer){
    return{
        type: ADD_ANSWER_TO_QUESTION,
        authUser,
        questionId,
        answer
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}