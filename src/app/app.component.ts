import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  // coreCourse=COURSES[0];
  // javaCourse=COURSES[1];

  startDate = new Date(2024, 0, 1); 

  courses=COURSES;
 
  // title: any;

  onCourseSelected(course:Course){
    console.log("App component - click event bubbled..", course);
  }

  // trackCourse(index:number, course:Course){
  //   return course.id;
  // }

}
