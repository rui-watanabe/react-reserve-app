import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../static/testData';
import Signup from '../../pages/signup';

test('Signup', () => {
  const component = renderer.create(<Signup />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

const realUseState = React.useState;

jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(
    () => realUseState(testUser) as [unknown, React.Dispatch<unknown>],
  );
test('Signuped', () => {
  const component = renderer.create(<Signup />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
