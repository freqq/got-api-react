import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import App from 'App';

describe('App', () => {
  configure({ adapter: new Adapter() });

  it('should be rendered', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
});
