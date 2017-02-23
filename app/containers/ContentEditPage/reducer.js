/*
 *
 * ContentEditPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_MENU,
  START_LOADER,
  STOP_LOADER,
  CONTENT_LOADED_SUCCESSEFULLY,
  CONTENT_LOADED_UNSUCCESSEFULLY
} from './constants';

export const initialState = fromJS({
  isLoaded: false,
  sections: [
    { title: 'Новости', api: 'news', isActive: false },
    { title: 'Афиша', api: 'tours', isActive: false },
    { title: 'Видео', api: 'video', isActive: false },
    { title: 'Фото', api: 'gallery', isActive: false },
    { title: 'Музыка', api: 'music', isActive: false }
  ],
  content: []
});

function contentEditPageReducer (state = initialState, action) {
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
    case STOP_LOADER: {
      return state.set('isLoaded', false);
    }
    case CONTENT_LOADED_SUCCESSEFULLY: {
      return state.set('content', action.content);
    }
    case CONTENT_LOADED_UNSUCCESSEFULLY: {
      return state.set('content', action.content);
    }
    default: {
      return state;
    }
  }
}

export default contentEditPageReducer;
