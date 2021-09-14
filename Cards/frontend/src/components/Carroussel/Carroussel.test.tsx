import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Carroussel from './Carroussel';

describe('when invoked a Carroussel component', () => {
  const route = {
    params: {
      pack: {
        id: '1234',
        packCards: [{ answer: 'answer' }]
      }
    }
  };
  test('Should render Carroussel component', () => {
    const carroussel = render(<Carroussel route={route} />);
    expect(carroussel).toMatchSnapshot();
  });

  test('when pressable 0, the flipHandler has to been called', () => {
    const screen = render(<Carroussel route={route} />);

    const pressableItem = screen.getByTestId('pressable0');
    fireEvent.press(pressableItem);
    expect(screen.queryByTestId('answer')).not.toBe(null);
  });
  describe('when is pressed twice', () => {
    test('then the answer should to be null', () => {
      const screen = render(<Carroussel route={route} />);

      const pressableItem = screen.getByTestId('pressable0');
      fireEvent.press(pressableItem);
      fireEvent.press(pressableItem);
      expect(screen.queryByTestId('answer')).toBeNull();
    });
  });
});
