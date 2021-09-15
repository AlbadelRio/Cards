import React from 'react';
import { render } from '../../utils/test.utils';
import CardComponent from './CardComponent';

jest.mock('../../redux/actions/cardActionCreator', () => ({
  ...jest.requireActual('../../redux/actions/cardActionCreator'),
  updateCard: jest.fn()
}));

describe('Given a Cardcomponent', () => {
  describe('when it is rendered', () => {
    let screen:any;
    beforeEach(() => {
      const card = {
        question: 'quest',
        answer: 'answer'
      };
      screen = render(<CardComponent card={card} />);
    });
    test('Then should match the snapshot', () => {
      expect(screen).toMatchSnapshot();
    });
  });
});
