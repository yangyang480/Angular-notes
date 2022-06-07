import {
  Component, Input, EventEmitter, Output, 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

// whenever we create a new component, we need to register it in the app module, CLI did it for us

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() postImg = '' //we assign a empty img to this property
  //in angular, the property can only be change in its own property, if we want to allow the other component to set property, we need to import the decoractor. in this case called input
  //decorator is not limit in classes, thet can be applied to properties too by using @Input method
  //we can use alias name too, @Input('Img') postImg = '' if we use alias name, then when we binding the img in the app.html, we have to use alias name to bind.
  //we don't usually use alias name on the input and output.
  //sending data from parent component to child component by using @Input decorator, from child tp parents by using @output decorator
  @Output() imgSelected = new EventEmitter<string>() //add type safty, since emitter is anytype

  //there are a lot lifecycle hooks, constructor/ngOnInit/ngOnChanges/ngOnDestory are most commnly used hooks
  constructor(){
    console.log('constructor() called')
  }
  //lifecycle hook when component is initialized, ngonInit function. we need to implement the interface
  ngOnInit(){
    console.log('ngonInit() called', this.postImg)
  }

  ngOnChanges() {
    console.log('ngOnChanges() called')
  }

  ngDoCheck() {
    console.log('ngDoCheck() called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called')
  }

  //remove functionality to prevent memory leaks, use after destory component
  ngOnDestroy() {
    console.log('ngOnDestroy() called')
  }
}
