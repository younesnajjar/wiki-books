import {CallState} from "../../../shared/models/call-state.model";
import {Book} from "../../book-shelf/books/books.model";

export interface Author {
  id: number;
  fullName: string;
  description: string;
  email: string;
  pictureUrl: string;
}

export interface AuthorsState {
  items: Author[];
  callState: CallState;
  selectedItem: Author;
  itemCallState: CallState;
  itemBooks: Book[];
  itemBooksCallState: CallState;
}
