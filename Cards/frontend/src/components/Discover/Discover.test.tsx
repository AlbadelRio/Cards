import React from 'react';
import { render } from '../../utils/test.utils';

import Discover from './Discover';

const navigation = { navigte: jest.fn() };

describe('Given a Discover component', () => {
  describe('when it is rendered', () => {
    let screen:any;
    beforeEach(() => {
      const initialState = {
        packCards: [{ subject: 'abc' }],
        randomPack: [{ subject: 'abc' }],
        token: 'hddjjdj',
        refreshToken: 'dkkdkd'
      };

      screen = render(<Discover navigation={navigation} />, initialState);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
