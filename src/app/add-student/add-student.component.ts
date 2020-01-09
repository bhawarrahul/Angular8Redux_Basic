import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentAppState } from '../student.app.state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ADD_STUDENT } from '../student-reducers/student-reducers-constants';
import { Student } from '../student-config/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  constructor(private store: Store<StudentAppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.studentForm = this.fb.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      address: ['']
   });
  }

  addStudent(id, name, address) {
    this.store.dispatch({
      type: ADD_STUDENT,
      payload: <Student> {
        id: id,
        name: name,
        address: address
      }
    });
  }

  ngOnInit() {
  }

}
