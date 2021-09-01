const {
  createPackCard, deletePackCard, findRandomBySubject
} = require('./packCardController');

const PackCard = require('../models/packCardModel');

jest.mock('../models/packCardModel');

describe('packCardController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });
  describe('Given a createPackCard controller', () => {
    describe('When is invoked', () => {
      beforeEach(() => {
        req = {
          body: { }
        };
      });
      describe('And the PackCard.create resolves', () => {
        test('Then call send', async () => {
          PackCard.create.mockResolvedValue({ });
          await createPackCard(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And PackCard.create rejects', () => {
        test('Then handleError call with 500', async () => {
          PackCard.create.mockRejectedValue(new Error('SERVER_ERROR'));
          await createPackCard(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.send.mock.calls[0][0]).toBe('SERVER_ERROR');
        });
      });
    });

    describe('Given a deletePackCard controller', () => {
      beforeEach(() => {
        req = {
          params: { packCardId: 1 }
        };
      });
      describe('And PackCard.findByIdAndDelete', () => {
        test('Then call send', async () => {
          PackCard.findByIdAndDelete.mockResolvedValue();
          await deletePackCard(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And PackCard.findByIdAndDelete rejects', () => {
        test('Then HandleError call with 500', async () => {
          PackCard.findByIdAndDelete.mockRejectedValue(new Error('SERVER_ERROR'));
          await deletePackCard(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.send.mock.calls[0][0]).toBe('SERVER_ERROR');
        });
      });
    });

    describe('Given a findRandomBySubject controller', () => {
      beforeEach(() => {
        req = {
          query: { subject: ' ' }
        };
      });
      describe('And PackCard.aggregate', () => {
        test('Then call send', async () => {
          PackCard.aggregate.mockReturnValue({
            sample: jest.fn()
              .mockReturnValue({ populate: jest.fn().mockResolvedValue({ }) })
          });
          await findRandomBySubject(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And PackCard.aggregate rejects', () => {
        beforeEach(async () => {
          PackCard.aggregate.mockReturnValue({
            sample: jest.fn()
              .mockReturnValue({ populate: jest.fn().mockRejectedValue(new Error('SERVER_ERROR')) })
          });
          await findRandomBySubject(req, res);
        });
        test('Then handleError call with 500', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then handleError send', () => {
          expect(res.send.mock.calls[0][0]).toBe('SERVER_ERROR');
        });
      });
    });
  });
});
