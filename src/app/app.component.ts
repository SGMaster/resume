import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curriculo';
  curiosidade: boolean;
  sobr: boolean = true;

  curiosidades(){
    this.curiosidade = true;
    this.sobr = false;
  }

  sobre() {
    this.curiosidade = false;
    this.sobr = true;
  }



}
