import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector's name has to follow the convention
  templateUrl: './app.component.html', //html will show. Template and templateurl cannot use at same time
  styleUrls: ['./app.component.css'] //css will show
  //however, we have to import this component into app.module to show all of them
})

export class AppComponent {
  title = 'basics' //this is the expression, angular use lots of expression. we put title/name here, and still need to go to html file to render the expression by using {{ name/title }}
  name = 'yangyang pearson' //we will use pipe to demostrat this name
  imgURL = 'https://picsum.photos/id/237/500/500'
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/238/500/500',
    'https://picsum.photos/id/239/500/500'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['bacon', 'pepperoni'],
    size: 'large'
  }
  blueClass = false
  fontSize = 30

  //we are creating a getmethod, and render this in {{ html }}
  getName() {
    return this.title;
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
    // typescript will not compile e.target.value, so we have to use type assertion by using as, telling TS that compile as this value.
  }

  //custom events: passing data from child to parent. 1) in child component using @Output and eventemitter
  //2) using (click) event listener, and put parent method as argument
  //3) passing the custom event in the app.html, and named a method
  //4) define the method in app.ts
  logImg(event: String) {
    console.log(event)
  }

  //content projection: passing content from parent to child component.
  //1) add nasted html tags inside of <app-post> tag in app.html
  //2) render the content with <ng-content> tag inside of child component which is post.html
}
