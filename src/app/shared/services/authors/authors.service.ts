import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urlEndPoints} from "../../config/end-points.const";
import {Author} from "../../../pages/book-shelf/authors/authors.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(urlEndPoints.authors);
  }
}
