import { createStore } from "redux";
import rootReducer from '../store/reducers/index'
import middleware from '../middleware'
import { saveQuestion } from '../utils/api';
import { addQuestionToUser } from './actions/users';
import { addQuestion } from "./actions/questions";
import { addAnswerToUser } from './actions/users'
import { addAnswerToQuestion } from './actions/questions'
import { saveQuestionAnswer } from '../utils/api'

export const Store = createStore(rootReducer, middleware);

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
      return saveQuestion({ optionOneText, optionTwoText, author }).then(
        question => {
          dispatch(addQuestion(question));
          dispatch(addQuestionToUser(question));
        }
      );
    };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
    return dispatch => {
      dispatch(addAnswerToUser(authUser, qid, answer));
      dispatch(addAnswerToQuestion(authUser, qid, answer));
  
      return saveQuestionAnswer(authUser, qid, answer).catch(e => {
        console.warn('Error in handleSaveQuestionAnswer:', e);
      });
    };
  }