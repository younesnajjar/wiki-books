import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urlEndPoints} from "../config/end-points.const";
import {Book} from "../../pages/book-shelf/books/books.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(urlEndPoints.books);
  }
}
