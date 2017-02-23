import {
  selectSections,
  selectContentEditPageDomain,
  selectContentEditState,
  selectActiveSection,
  selectActiveSectionName
} from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectSections', () => {
  let state;

  beforeEach(() => {
    state = {
      contentEditPage: {
        sections: [
          { title: 'hello', api: 'hello' },
          { title: 'world', api: 'world' }
        ]
      }
    };
  });

  it('should select contentEditPage state', () => {
    const contentSelector = selectContentEditPageDomain();
    const mockedState = fromJS(state);
    expect(contentSelector(mockedState).toJS()).toEqual(state.contentEditPage);
  });

  it('should select contentEditState plain', () => {
    const contentSelector = selectContentEditState();
    const mockedState = fromJS(state);
    expect(contentSelector(mockedState)).toEqual(state.contentEditPage);
  });

  it('should select sections', () => {
    const sectionsState = selectSections();
    const mockedState = fromJS(state);

    expect(sectionsState(mockedState).toJS()).toEqual(state.contentEditPage.sections);
  });

  it('should select active section', () => {
    const section = state.contentEditPage.sections[0];
    section.isActive = true;

    const sectionState = selectActiveSection();
    const mockedState = fromJS(state);

    expect(sectionState(mockedState).toJS()).toEqual(section);
  });

  it('should select active section name', () => {
    const section = state.contentEditPage.sections[0];
    section.isActive = true;

    const nameState = selectActiveSectionName();
    const mockedState = fromJS(state);

    expect(nameState(mockedState)).toEqual(section.api);
  });
});
