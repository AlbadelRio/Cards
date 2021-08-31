const {
  createCard,
  updateCardById,
  deleteCard
} = require('./cardController');
const Card = require('../models/cardModel');

jest.mock('../models/cardModel');

describe('CardController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });
  describe('Given a createCard controller', () => {
    req = {
      body: { }
    };
    describe('When is invoked', () => {
      describe('And the Card.create resolves', () => {
        test('then call send', async () => {
          Card.create.mockResolvedValue({ });
          await createCard(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And Card.create rejects', () => {
        test('Then handleError call with 500', async () => {
          Card.create.mockRejectedValue(new Error('CREATE_ERROR'));
          await createCard(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.send.mock.calls[0][0]).toBe('CREATE_ERROR');
        });
      });
    });
  });

  describe('Given a updateCardById controller', () => {
    req = {
      params: { },
      body: ' '
    };
    describe('And Card.findByIdAndUpdate resolves', () => {
      test('Then call send', async () => {
        Card.findByIdAndUpdate.mockResolvedValue({ });
        await updateCardById(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And Card.findByIdAndUpdate rejects', () => {
      test('then handleError call with 404', async () => {
        Card.findByIdAndUpdate.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await updateCardById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });
  describe('Given a deleteCard controller', () => {
    req = {
      params: { }
    };
    describe('And deleteCard resolves', () => {
      test('Then call send', async () => {
        Card.findByIdAndDelete.mockResolvedValue();
        await deleteCard(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And Card.findByIdAndDelete rejects', () => {
      test('Then handleError call with 404', async () => {
        Card.findByIdAndDelete.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await deleteCard(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });
});
