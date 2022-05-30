import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  nome = 'Tester';
  nomi = ['Marco', 'Lucia', 'Francesco']
  cambia(n:string){
  this.nome = n
  this.nomi.push(this.nome)
  }}

