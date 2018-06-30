import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../user/UserForm';

const userForm = shallow(<UserForm />);

it('renders without crashing', () => {
  expect(userForm).toMatchSnapshot();
});