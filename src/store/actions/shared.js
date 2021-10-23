import { getInitialData } from '../../utils/api'
import { reciveQuestions } from '../actions/questions'
import { reciveUsers } from '../actions/users'

export function handleInitialData(){
    return dispatch =>{
        return getInitialData().then(({users, questions}) => {
            dispatch(reciveUsers(users));
            dispatch(reciveQuestions(questions));
        })
    }
}