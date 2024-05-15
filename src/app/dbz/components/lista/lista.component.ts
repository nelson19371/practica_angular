import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>(); 

  @Input()
  public characterList: Character[] = [
   
  ]

  onDeleteCharacter(id?:string):void{
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.onDelete.emit(id);
  }


}
