import actionTypes from '../actions/actionTypes';
import cardReducer from './cardsReducers';

describe('Given cardReducer function', () => {
  test('when action.type = CREATE_CARD, then should return newCard', () => {
    expect(
      cardReducer(
        {},
        {
          type: actionTypes.CREATE_CARD,
          newCard: { subject: 'Astronomy' }

        }
      )
    ).toEqual({ subject: 'Astronomy' });
  });

  test('when action.type = UPDATE_CARD, then should return newCard', () => {
    expect(
      cardReducer(
        {},
        {
          type: actionTypes.UPDATE_CARD,
          newCard: { subject: 'History' }

        }
      )
    ).toEqual({ subject: 'History' });
  });
});
