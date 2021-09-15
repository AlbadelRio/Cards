import React from 'react';
import { render } from '../../utils/test.utils';

import Discover from './Discover';

const navigation = { navigte: jest.fn() };

describe('Given a Discover component', () => {
  describe('when it is rendered', () => {
    let screen:any;
    beforeEach(() => {
      screen = render(<Discover navigation={navigation} />);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
