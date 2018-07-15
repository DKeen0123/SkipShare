import React from 'react';
import { shallow } from 'enzyme';
import CreateListing from '../components/CreateListing';

const createListing = shallow(<CreateListing />);

it('renders without crashing', () => {
  expect(createListing).toMatchSnapshot();
});