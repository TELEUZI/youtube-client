import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../state.models';

export enum CardActions {
  create = '[Card] Create card',
  delete = '[Card] Delete card by title',
}

export const createCard = createAction(CardActions.create, props<{ payload: CustomCard }>());
export const deleteCard = createAction(CardActions.delete, props<{ payload: { title: string } }>());
