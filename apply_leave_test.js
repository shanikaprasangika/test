
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
   emp_nu: 0012,
   leave_type : 'sick leave',
   from_date : "2018-07-01",
   to_date : "2018-07-02",
   leave_status : 'Pending'
    
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
