
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import salaryCreationForm from 'src/views/hr/SalaryCreationForm';

const mockStore = configureStore([]);

describe('Salary creation Form', () => {
  let store;
  let adminPortalPositionForm;

  const data = {
   employee_name : 'shanika',
   basic_salary : 50000,
   bank_name : "ABC",
   account_no : "213456",
   account_holder_name : 'shanika',
   ifsc_code: "2343",
   tax_deduction: 1000
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    salaryCreationForm = renderer.create(
      <Provider store={store}>
        <SalaryCreationForm {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(salaryCreationForm.toJSON()).toMatchSnapshot();
  });
});
