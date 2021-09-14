import React from 'react';
import { render } from '../../utils/test.utils';

import Cards from './Cards';

const navigation = { navigte: jest.fn() };

describe('Given a Cards component', () => {
  describe('when it is rendered', () => {
    let screen:any;
    beforeEach(() => {
      screen = render(<Cards navigation={navigation} />);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
