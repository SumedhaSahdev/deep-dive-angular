import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;

  @Input()
  cardIndex: number | undefined;

  @Output('courseSelected')
  courseEmitter=new EventEmitter<Course>();

  constructor(){ }

  ngOnInit() {
  }

  onCourseViewed() { 
    console.log("course clicked!");
    this.courseEmitter.emit(this.course);
  
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    return {
      'beginner': true,
      'course-card': true
    };
  }

  cardStyles(){
      return {
        'text-decoration': 'underline'
      };
  }
}