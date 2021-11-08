import React from 'react';
import renderer from 'react-test-renderer';

import Button from 'components/Button';

test('Button should have given text', () => {
  const sampleButtonText = 'Sample button text';
  const buttonWrapper = renderer.create(<Button text={sampleButtonText} />);

  expect(buttonWrapper.toTree()?.props.text).toEqual(sampleButtonText);
});
