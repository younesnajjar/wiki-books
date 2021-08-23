import {Component} from '@angular/core';
import {NotificationService} from "../core/notifications/notification.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  public items: MenuItem[];
  public activeItem: MenuItem;

  constructor(private notificationService: NotificationService) {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home']},
      {label: 'Books', icon: 'pi pi-fw pi-book', routerLink: ['books']},
      {label: 'Create book', icon: 'pi pi-fw pi-pencil', routerLink: ['books/form']}
    ];

    this.activeItem = this.items[0];
  }


  openmessage() {
    this.notificationService.default('Hello', 'Testing the comp');
  }
}
