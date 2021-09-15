import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';

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
    describe('When pressable is pressed', () => {
      test.only('the randomHandler has to been called', () => {
        const filteredPackCard = [{ subject: 'abc' }];

        const randomHandler = jest.fn();
        const pressableItem = screen.getByText('abc');
        fireEvent.press(pressableItem);
        expect(screen.queryByTestId(randomHandler)).toHaveBeenCalled();
      });
    });
  });
});
