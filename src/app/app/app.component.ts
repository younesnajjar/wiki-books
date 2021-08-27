import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public items: MenuItem[];
  public activeItem: MenuItem;

  constructor() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home']},
      {label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books']},
      {label: 'Create book', icon: 'pi pi-fw pi-pencil', routerLink: ['books/form']}
    ];

    this.activeItem = this.items[0];
  }
}
