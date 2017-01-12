import { createSelector } from 'reselect';

/**
 * Direct selector to the contentEditPage state domain
 */
const selectContentEditPageDomain = () => (state) => state.get('contentEditPage');

/**
 * Other specific selectors
 */
const selectSections = () => createSelector(
  selectContentEditPageDomain(),
  (contentState) => contentState.get('sections'),
  (sections) => {
    return sections.toJS()
  }
);


/**
 * Default selector used by ContentEditPage
 */

export {
  selectContentEditPageDomain,
  selectSections
};
