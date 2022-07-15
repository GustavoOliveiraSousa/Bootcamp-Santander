import { Component, OnInit } from "@angular/core";
import {Course} from "./course";

@Component({
    selector: 'app-course-list', //tudo junto
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120 ,
                releaseDate: '14 de Janeiro de 2003',
                rating: 4.5,
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80 ,
                releaseDate: '15 de Julho de 2022',
                rating: 4,
            }
        ]
    }
}