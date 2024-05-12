import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: 'hero.component.html',
  styleUrl: 'hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  capitalize(string:String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getHeroDescription():string{
    return `${this.name} - ${ this.age }`;

  }

  changeHero():void{
    //TODO:Implementar metodo
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 28;
  }

  reset():void{
    this.name="ironman";
    this.age=45

    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>';
    })

  }

}
