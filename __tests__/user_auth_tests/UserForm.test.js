import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../components/user/UserForm';

const props = { type: 'Register' }
const userForm = shallow(<UserForm {...props} />);

it('renders without crashing', () => {
  expect(userForm).toMatchSnapshot();
});