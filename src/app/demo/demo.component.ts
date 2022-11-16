import { Component, OnInit,Input ,OnChanges, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck{
  @Input() value: string = "Life Cycle Hooks"
  constructor() { 
    console.log('constructor');
    // console.log(this.value);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit called!");
    // console.log(this.value);
  }
ngDoCheck(){}
}
