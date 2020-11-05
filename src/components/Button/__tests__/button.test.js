import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';
import UxPinWrapper from '../../../wrappers/UXPinWrapper';

test('renders error Button correctly', () => {
  const button = (
    <UxPinWrapper>
      <Button variant="primary">Test</Button>
    </UxPinWrapper>
  );

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount');
});
