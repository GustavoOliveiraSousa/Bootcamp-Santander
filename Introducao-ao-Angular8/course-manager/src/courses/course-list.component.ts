import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list', //tudo junto
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit {
   
    course: Course[] = [] ;

    ngOnInit(): void {
        this.course = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120 ,
                rating: 5.4,
                releasedDate: '14 de Janeiro de 2003'
            },
            {
                id: 2,
                name: 'Angulae: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80 ,
                rating: 4,
                releasedDate: '14 de Julho de 2022'
            }
        ]
    }
}