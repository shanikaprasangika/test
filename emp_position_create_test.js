
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import empPositionCreateForm from 'src/views/admin/EmpPositionCreateForm';

const mockStore = configureStore([]);

describe('Employee position creation', () => {
  let store;
  let empPositionCreateForm;

  const data = {
   employee_name : 'shanika',
   position : "software engineer"
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    empPositionCreateForm = renderer.create(
      <Provider store={store}>
        <EmpPositionCreateForm {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(empPositionCreateForm.toJSON()).toMatchSnapshot();
  });
});
