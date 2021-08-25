import {CallState} from "../../../shared/models/call-state.model";
import {Form} from "../book-form/form.model";
import {Author} from "../authors/authors.model";

export interface Book {
  id: number;
  title: string;
  description: string;
  authorId: number;
  author: Author;
}

export interface BooksState {
  items: Book[];
  callState: CallState;
  onDeleteItems: number[],
  bookOnCreation: boolean,
}


export function getBookRequestBody(form: Form) {
  const book = {...form};
  book.authorId = form.author.id;
  return book;
}
