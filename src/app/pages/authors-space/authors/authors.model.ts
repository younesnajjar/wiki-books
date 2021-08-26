import {CallState} from "../../../shared/models/call-state.model";

export interface Author {
  id: number;
  name: string;
  description: string;
}

export interface AuthorsState {
  items: Author[];
  callState: CallState;
}
