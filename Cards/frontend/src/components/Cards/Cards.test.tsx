/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render, fireEvent } from '../../utils/test.utils';
import { deletePackCard } from '../../redux/actions/packCardsActionCreators';
import Cards from './Cards';

jest.mock('../../redux/actions/packCardsActionCreators', () => ({
  ...jest.requireActual('../../redux/actions/packCardsActionCreators'),
  deletePackCard: jest.fn()
}));

describe('Given a Cards component', () => {
  describe('when it is rendered', () => {
    let screen:any;
    let navigation:any;
    beforeEach(() => {
      const initialState = {
        auth: {
          user: {
            user: {
              _id: '1'
            }
          }
        },
        packardsReducer: [
          {
            _id: '0',
            user: '3',
            subscriptors: [{ userId: '1' }, { userId: '3' }]
          },
          {
            _id: '14',
            user: '1',
            subscriptors: [{ userId: '2' }]
          }
        ]
      };

      navigation = { navigate: jest.fn() };
      screen = render(<Cards navigation={navigation} />, initialState);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
    test('Should call navigation.navigate', () => {
      const pressable = screen.getByTestId('update0');
      fireEvent.press(pressable);
      expect(navigation.navigate).toHaveBeenCalled();
    });
    test('Should call navigation.navigate', () => {
      const pressable = screen.getByTestId('carroussel0');
      fireEvent.press(pressable);
      expect(navigation.navigate).toHaveBeenCalled();
    });
    test('should call navigation.navigate', () => {
      const pressable = screen.getByTestId('add');
      fireEvent.press(pressable);
      expect(navigation.navigate).toHaveBeenCalled();
    });
    test('should call deleteHandler', () => {
      (deletePackCard as jest.Mock).mockReturnValueOnce({ type: '' });
      const pressable = screen.getByTestId('delete0');
      fireEvent.press(pressable);

      expect(deletePackCard).toHaveBeenCalled();
    });
  });
});
