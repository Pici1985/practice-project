import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';


@Component({
  selector: 'app-rx-practice',
  templateUrl: './rx-practice.component.html',
  styleUrls: ['./rx-practice.component.css']
})
export class RxPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const interval$ = interval(1000); 
    
    // interval$.subscribe(val => console.log("stream 1 => " + val)); 
    // interval$.subscribe(val => console.log("stream 2 => " + val)); 
    
    const timer$ = timer(3000, 1000); 
    
    // timer$.subscribe(val => console.log("stream 2 => " + val)); 
    
    const click$ = fromEvent(document, 'click');
    
    click$.subscribe(event => console.log(event)); 
  }

}
