import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsSpaceRoutingModule } from './authors-space-routing.module';
import {AuthorComponent} from "./authors/components/author/author.component";
import {StoreModule} from "@ngrx/store";
import {AUTHORS_SPACE_FEATURE_NAME, authorsSpaceReducers} from "./authors-space.state";
import {EffectsModule} from "@ngrx/effects";
import {AuthorsEffects} from "./authors/authors.effects";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    AuthorComponent
  ],
    imports: [
        CommonModule,
        AuthorsSpaceRoutingModule,
        StoreModule.forFeature(AUTHORS_SPACE_FEATURE_NAME, authorsSpaceReducers),
        EffectsModule.forFeature([
            AuthorsEffects,
        ]),

        SharedModule,

    ]
})
export class AuthorsSpaceModule { }
