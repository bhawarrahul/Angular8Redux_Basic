import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student-config/student.model';
import { StudentAppState } from '../student.app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student: Observable<Student[]>;
  constructor(private store: Store<StudentAppState>) {
    this.student = this.store.select(state => state.student);
   }
  ngOnInit() {
  }
}
