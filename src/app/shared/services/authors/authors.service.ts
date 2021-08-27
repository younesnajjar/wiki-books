import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urlEndPoints} from "../../config/end-points.const";
import {Author} from "../../../pages/authors-space/authors/authors.model";
import {Book} from "../../../pages/book-shelf/books/books.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(urlEndPoints.authors);
  }

  getOne(id: string): Observable<Author> {
    return this.httpClient.get<Author>(urlEndPoints.authors + id);
  }

  getAuthorBooks(id: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(urlEndPoints.books + '?authorId=' + id);
  }
}
