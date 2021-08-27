

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {Store} from "@ngrx/store";
import {ROUTER_NAVIGATED} from "@ngrx/router-store";

import {actionStoreNavigation} from "./navigation-history.actions";
import {selectUrl} from "../../../routes/router.selectors";
import {getNavigationItem} from "./navigation-history.model";

@Injectable()
export class NavigationHistoryEffects {



  navigated = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        withLatestFrom(this.store.select(selectUrl)),
        switchMap(([, url]) => of(actionStoreNavigation({navigationItem: getNavigationItem(url)})))
      )
  );

  constructor(private actions$: Actions, private store: Store) {
  }
}
