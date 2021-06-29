
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import applyLeave from 'src/views/emp/ApplyLeave';

const mockStore = configureStore([]);

describe('Apply leave data screen', () => {
  let store;
  let adminPortalPositionForm;

  const data = {
   employee_name : 'shanika',
   position : "software engineer"
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    applyLeave = renderer.create(
      <Provider store={store}>
        <ApplyLeave {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(applyLeave.toJSON()).toMatchSnapshot();
  });
});
