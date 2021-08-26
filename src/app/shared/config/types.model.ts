import {FormsState} from "../../pages/forms/forms.state";
import {BookShelfState} from "../../pages/book-shelf/book-shelf.state";

export interface State {
  bookShelf: BookShelfState;
  forms: FormsState;
}
