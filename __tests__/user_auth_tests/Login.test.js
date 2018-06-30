import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/user/Login';

const props = { type: 'Register' }
const login = shallow(<Login {...props} />);

it('renders without crashing', () => {
  expect(login).toMatchSnapshot();
});