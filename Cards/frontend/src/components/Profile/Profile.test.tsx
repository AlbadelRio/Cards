import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';

import Profile from './Profile';

const navigation = { navigte: jest.fn() };
jest.mock('../../redux/actions/authActionCreator', () => ({
  login: jest.fn()
}));

describe('Given a Cards component', () => {
  let screen:any;
  describe('when it is rendered', () => {
    beforeEach(() => {
      screen = render(<Profile navigation={navigation} />);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });

  describe('And email input text is changed', () => {
    test('Then the text typed should be renderer', () => {
      const email = screen.getByPlaceholderText('emailInput');
      const setEmail = jest.fn();
      fireEvent(email, 'onChangeText', setEmail);
      fireEvent.changeText(email, 'onChangeText');
      expect(screen.queryByDisplayValue(/email@email/i)).not.toBe(null);
    });
  });
  describe('And email input text is changed', () => {
    test('Then the text typed should be renderer', () => {
      const password = screen.getByPlaceholderText('passwordInput');
      const setPassword = jest.fn();
      fireEvent(password, 'onChangeText', setPassword);
      fireEvent.changeText(password, 'onChangeText');
      expect(screen.queryByDisplayValue(/email@email/i)).not.toBe(null);
    });
  });
});
