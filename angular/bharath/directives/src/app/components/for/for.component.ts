import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css'],
})
export class ForComponent implements OnInit {
  courses: string[] = [];
  students: Student[] = [];
  constructor() {
    this.courses = ['Angular', 'React', 'Vue'];
    this.students = [
      new Student(1, 'Pushkar', 70),
      new Student(5, 'Vikram', 10),
      new Student(4, 'Alisha', 30),
      new Student(2, 'Priya', 20),
      new Student(3, 'Vivek', 90),
    ];
  }

  ngOnInit(): void {}
}
