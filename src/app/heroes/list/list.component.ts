import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public ultimoHeroe?: string;

  removeLastHero():void {
     this.ultimoHeroe= this.heroNames.pop()
     console.log(this.ultimoHeroe)
  }

}
