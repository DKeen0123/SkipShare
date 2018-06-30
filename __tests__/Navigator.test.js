import React from 'react';
import { shallow } from 'enzyme';
import Navigator from '../components/Navigator';

const navigator = shallow(<Navigator />);

it('renders without crashing', () => {
  expect(navigator).toMatchSnapshot();
});