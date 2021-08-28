import {CallState} from "../../../shared/models/call-state.model";
import {Form} from "../../forms/book-form/form.model";
import {Author} from "../../authors-space/authors/authors.model";

export interface Book {
  id: number;
  title: string;
  description: string;
  authorId: number;
  author: Author;
  coverUrl: string;
  rating: number;
  genres: string;
  type: string
}

export interface BooksState {
  items: Book[];
  callState: CallState;
  selectedItem: Book | null;
  itemCallState: CallState;
  onDeleteItems: number[];
  bookOnCreation: boolean;
}


export function getBookRequestBody(form: Form) {
  const book = {...form};
  book.authorId = form.author.id;
  return book;
}
