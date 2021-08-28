import {AuthorsState} from "../pages/authors-space/authors/authors.model";
import {FormsState} from "../pages/forms/forms.state";
import {HistoryState} from "./store/history/history.state";
import {BookShelfState} from "../pages/book-shelf/book-shelf.state";

export interface State {
  bookShelf: BookShelfState;
  authorsSpace: AuthorsState
  forms: FormsState;
  history: HistoryState
}
