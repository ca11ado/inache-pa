/*
 *
 * ContentEditPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

export const initialState = fromJS({
  sections: [
    { title: 'Новости', api: 'news' },
    { title: 'Афиша', api: 'tours' },
    { title: 'Видео', api: 'tours', noActive: true },
    { title: 'Фото', api: 'gallery' },
    { title: 'Музыка', api: 'music' }
  ]
});

function contentEditPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default contentEditPageReducer;
