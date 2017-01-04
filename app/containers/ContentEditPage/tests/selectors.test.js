import { selectSections, selectContentEditPageDomain } from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectSections', () => {
  it('should select contentEditPage state', () => {
    const contentSelector = selectContentEditPageDomain();
    const contentEditPageState = fromJS({});
    const mockedState = fromJS({
      contentEditPage: contentEditPageState
    });
    expect(contentSelector(mockedState)).toEqual(contentEditPageState);
  });

  it('should select sections', () => {
    const sectionsState = selectSections();
    const sections = [
      { title: 'hello', api: 'hello' },
      { title: 'world', api: 'world' }
    ];
    const mockedState = fromJS({
      contentEditPage: {
        sections
      }
    });

    expect(sectionsState(mockedState)).toEqual({ sections });
  });
});
