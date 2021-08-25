import {Book} from "../books/books.model";


export interface FormState {
  form: Form;
  bookExists: boolean;
}

export type Form = Book;
