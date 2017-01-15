/*
 *
 * ContentEditPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_MENU,
  START_LOADER
} from './constants';

export const initialState = fromJS({
  isLoaded: false,
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
    case SELECT_MENU: {
      const sections = initialState
        .get('sections')
        .update(
          initialState
            .get('sections')
            .findIndex((item) => item.get('api') === action.menu),
          (item) => item.set('isActive', true)
        );
      return state.set('sections', sections);
    }
    case START_LOADER: {
      return state.set('isLoaded', true);
    }
    default: {
      return state;
    }
  }
}

export default contentEditPageReducer;
