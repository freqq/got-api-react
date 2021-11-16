import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { ButtonIcon, ButtonText } from 'components/Button/Button.styles';
import Button from 'components/Button';
import sampleIcon from 'assets/dead.svg';

describe('Buttont', () => {
  configure({ adapter: new Adapter() });
  const onClick = () => console.log('onClick');

  it('should- have given text', () => {
    const sampleButtonText = 'Sample button text';
    const buttonWrapper = shallow(<Button text={sampleButtonText} onClick={onClick} />);
    const buttonText = buttonWrapper.find(ButtonText);

    expect(buttonText.exists()).toBe(true);
    expect(buttonText.text()).toEqual(sampleButtonText);
  });

  it('should have given icon', () => {
    const buttonWrapper = shallow(<Button icon={sampleIcon} onClick={onClick} />);
    const buttonIcon = buttonWrapper.find(ButtonIcon);

    expect(buttonIcon.exists()).toBe(true);
  });

  it('should have default disabled false', () => {
    const buttonWrapper = shallow(<Button icon={sampleIcon} onClick={onClick} />);

    expect(buttonWrapper.prop('disabled')).toEqual(false);
  });

  it('should be disabled when passed disable prop', () => {
    const buttonWrapper = shallow(<Button icon={sampleIcon} disabled onClick={onClick} />);

    expect(buttonWrapper.prop('disabled')).toEqual(true);
  });
});
