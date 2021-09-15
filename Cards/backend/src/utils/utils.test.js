/* eslint-disable no-unused-vars */
const { dataChanges } = require('./userUtils');

describe('with another case', () => {
  const body = {
    type: 'unkwonCase',
    cardId: ' '
  };
  const userData = {
    difficultCards: []
  };
  const userFound = {
    save: jest.fn()
  };
  test('then should not send call', () => {
    dataChanges(body, userData, userFound);
    expect(userFound.save).not.toHaveBeenCalled();
  });
});

describe('datachangesFunction', () => {
  describe('with cardsAdquired case', () => {
    const body = {
      type: 'cardsAdquired',
      cardId: ' '
    };
    const userData = {
      cardsAdquired: []

    };
    const userFound = {
      save: jest.fn()
    };
    test('then should call send', () => {
      dataChanges(body, userData, userFound);
      expect(userFound.save).toHaveBeenCalled();
    });
  });

  describe('with difficultCards case', () => {
    const body = {
      type: 'difficultCards',
      cardId: ' '
    };
    const userData = {
      difficultCards: []
    };
    const userFound = {
      save: jest.fn()
    };
    test('then should call send', () => {
      dataChanges(body, userData, userFound);
      expect(userFound.save).toHaveBeenCalled();
    });
  });
});
