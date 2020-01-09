import { Student } from '../student-config/student.model';
import { ADD_STUDENT } from './student-reducers-constants';


export function addStudentReducer(state: Student[] = [], action) {
  switch (action.type) {
    case ADD_STUDENT:
        return [...state, action.payload];
    default:
        return state;
    }
}