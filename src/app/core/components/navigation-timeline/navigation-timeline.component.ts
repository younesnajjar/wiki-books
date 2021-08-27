import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {NavigationHistoryItem} from "../../store/history/navigation-history/navigation-history.model";
import {selectNavigationHistoryList} from "../../store/history/history.selector";
import {State} from "../../../pages/book-shelf/book-shelf.state";

@Component({
  selector: 'app-navigation-timeline',
  templateUrl: './navigation-timeline.component.html',
  styleUrls: ['./navigation-timeline.component.scss']
})
export class NavigationTimelineComponent implements OnInit {

  navigationHistoryList$: Observable<NavigationHistoryItem[]>;
  showDetails: boolean = true;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.navigationHistoryList$ = this.store.pipe(select(selectNavigationHistoryList));
  }

}
