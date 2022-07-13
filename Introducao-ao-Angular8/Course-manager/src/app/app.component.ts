import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //AQUI É O TYPESCRIPT, SEU CÓDIGO
  title = 'Course-manager';
  name: string = 'Gustavo';
}
