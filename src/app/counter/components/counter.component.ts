import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<h1>{{counter}}</h1>
  <div>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">RESET</button>
   
  </div>`,
  styleUrl:'counter.component.css'

})
export class CounterComponent{

    
    public counter: number = 10;
  
    increaseBy( value:number): void{
      this.counter += value;
    }
  
    reset( ): void{
      this.counter = 10;
    }
    

}