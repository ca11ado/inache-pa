/*
 *
 * ContentEditPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SELECT_MENU
} from './constants';

export const initialState = fromJS({
  sections: [
    { title: 'Новости', api: 'news', isActive: false },
    { title: 'Афиша', api: 'tours', isActive: false },
    { title: 'Видео', api: 'video', isActive: false },
    { title: 'Фото', api: 'gallery', isActive: false },
    { title: 'Музыка', api: 'music', isActive: false }
  ]
});

function contentEditPageReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MENU:
      const sections = initialState
        .get('sections')
        .update(
          initialState
            .get('sections')
            .findIndex((item) => item.get('api') === action.menu),
          (item) => item.set('isActive', true)
        );
      return state.set('sections', sections);
    default:
      return state;
  }
}

export default contentEditPageReducer;
