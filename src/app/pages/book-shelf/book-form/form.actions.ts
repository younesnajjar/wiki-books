import { createAction, props } from '@ngrx/store';

import { Form } from './form.model';

export const actionFormUpdate = createAction(
  '[Form] Update',
  props<{ form: Form }>()
);

export const actionFormReset = createAction('[Form] Reset');

export const actionGetBookExistence = createAction(
  '[Form] Get Book Existence',
  props<{ id: string }>()
);
export const actionBookExistence = createAction(
  '[Form] Book Existence',
  props<{ bookExistence: boolean }>()
);
