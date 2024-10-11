import { Component } from '@angular/core';

import { onExit } from './../../../guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements onExit {

  constructor() { }

  onExit() {
    const rta =  confirm('Estás seguro de que quieres salir?');
    return rta;
  }

}
