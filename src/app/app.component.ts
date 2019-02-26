import { Component, OnInit } from '@angular/core';
import { ourInterfaces } from './shared/my-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-typescript-interfaces';

  ourCust: ourInterfaces.Customer;
  ourAnimal: ourInterfaces.Animal;

  ngOnInit() {
    const ourCust = this.ourCust = {
      id: 1,
      name: 'Bob',
      age: 26
    };

    const ourAnimal = this.ourAnimal = {
      id: 1,
      name: 'Sir Cuddles',
      hungerLevel: 200000000
    };
  }


}
