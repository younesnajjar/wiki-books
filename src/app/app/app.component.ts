import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {select, Store} from "@ngrx/store";
import {State} from "../pages/book-shelf/book-shelf.state";
import {selectUrl} from "../core/routes/router.selectors";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public items: MenuItem[];
  public activeItem: MenuItem | undefined;

  public currentFeature$: Observable<string>

  public currentFeatureSubscription: Subscription;

  constructor(private store: Store<State>) {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home'},
      {label: 'Books', icon: 'pi pi-fw pi-book', routerLink: '/books'},
      {label: 'Create book', icon: 'pi pi-fw pi-pencil', routerLink: '/books/form'}
    ];
  }

  ngOnInit() {
    this.currentFeature$ = this.store.pipe(select(selectUrl));
    this.currentFeatureSubscription = this.currentFeature$.subscribe((url) => {
      if (url) {
        this.setActiveItem(url);
      }
    });
  }

  setActiveItem(url: string) {
    this.activeItem = this.items.find(item => {
      const itemRouteList = item.routerLink.split('/');
      const urlRouteList = url.split('/');
      return itemRouteList[itemRouteList.length - 1] === urlRouteList[urlRouteList.length - 1];
    });
  }

  ngOnDestroy() {
    if (this.currentFeatureSubscription) {
      this.currentFeatureSubscription.unsubscribe();
    }
  }
}
