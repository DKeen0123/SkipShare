import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from '../../components/user/CreateUser';

const props = { type: 'Register' }
const createUser = shallow(<CreateUser {...props} />);

it('renders without crashing', () => {
  expect(createUser).toMatchSnapshot();
});