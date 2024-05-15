
import { Character } from './../../interfaces/character.interface';
import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); 

  public character: Character = {
    name:'',
    power:0

  };

  emitCharacter():void{
    console.log(this.character);
   
    if( this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };

   

  }

}
