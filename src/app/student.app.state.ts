import { Student } from './student-config/student.model';

export interface StudentAppState {
    readonly student: Student[];
  }