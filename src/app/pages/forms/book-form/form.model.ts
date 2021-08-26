import {Book} from "../../book-shelf/books/books.model";


export interface FormState {
  form: Form;
  bookExists: boolean;
}

export type Form = Book;
