import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from '../../components/user/CreateUser';

const createUser = shallow(<CreateUser />);

it('renders without crashing', () => {
  expect(createUser).toMatchSnapshot();
});
