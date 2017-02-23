import { createSelector } from 'reselect';

/**
 * Direct selector to the contentEditPage state domain
 */
const selectContentEditPageDomain = () => (state) => state.get('contentEditPage');

const selectContentEditState = () => createSelector(
  selectContentEditPageDomain(),
  (contentState) => contentState.toJS()
);

const selectSections = () => createSelector(
  selectContentEditPageDomain(),
  (contentState) => contentState.get('sections')
);

const selectActiveSection = () => createSelector(
  selectSections(),
  (sections) => sections.get(sections.findIndex((section) => section.get('isActive')))
);

const selectActiveSectionName = () => createSelector(
  selectActiveSection(),
  (section) => section.get('api')
);

/**
 * Default selector used by ContentEditPage
 */

export {
  selectContentEditPageDomain,
  selectContentEditState,
  selectSections,
  selectActiveSection,
  selectActiveSectionName
};
