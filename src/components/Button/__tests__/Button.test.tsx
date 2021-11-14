import renderer from 'react-test-renderer';

import Button from 'components/Button';

test('Button should have given text', () => {
  const sampleButtonText = 'Sample button text';
  const onClick = () => console.log('onClick');

  const buttonWrapper = renderer.create(<Button text={sampleButtonText} onClick={onClick} />);

  expect(buttonWrapper.toTree()?.props.text).toEqual(sampleButtonText);
});
