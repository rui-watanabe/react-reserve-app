import React from 'react';
import renderer from 'react-test-renderer';
import HeadContent from '../../_App/HeadContent';

test('HeadContent', () => {
  const component = renderer.create(<HeadContent />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
