import {CallState} from "../../../shared/models/call-state.model";

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
}

export interface BooksState {
  items: Book[];
  callState: CallState;
  onDeleteItems: number[]
}
