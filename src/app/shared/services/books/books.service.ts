import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urlEndPoints} from "../../config/end-points.const";
import {Book} from "../../../pages/book-shelf/books/books.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(includeAuthor: boolean = true): Observable<Book[]> {
    return this.httpClient.get<Book[]>(urlEndPoints.books + (includeAuthor ? '?_expand=author' : ''));
  }

  getOne(id: string, includeAuthor: boolean = true): Observable<Book> {
    return this.httpClient.get<Book>(urlEndPoints.books + id + (includeAuthor ? '?_expand=author' : ''));
  }

  getByAuthor(authorId: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(urlEndPoints.books + '?authorId=' + authorId);
  }

  deleteBook(book: Book): Observable<void> {
    return this.httpClient.delete<void>(urlEndPoints.books + book.id);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(urlEndPoints.books, book);
  }
}
