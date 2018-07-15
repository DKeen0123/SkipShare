import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

const home = shallow(<Home />);

it('renders without crashing', () => {
  expect(home).toMatchSnapshot();
});