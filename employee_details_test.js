
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import employeeDetails from 'src/views/hr/EmployeeDetails';

const mockStore = configureStore([]);

describe('Salary creation Form', () => {
  let store;
  let employeeDetails;

  const data = {
   employee_id : 00012,
   email : 'shanika@gmail.com',
   user_role : "emp",
   first_name : "shanika",
   middle_name : 'prasangika',
   last_name : 'kumari',
   dob: '1990-02-01',
   contact_no: '077123482',
   position : 'engineer',
   account_role: 'employee'
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    employeeDetails = renderer.create(
      <Provider store={store}>
        <EmployeeDetails {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(EmployeeDetails.toJSON()).toMatchSnapshot();
  });
});
