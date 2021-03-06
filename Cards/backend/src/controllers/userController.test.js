const { dataChanges } = require('../utils/userUtils');
const {
  getAllUsers,
  updatedUserById,
  getUserById,
  deleteUser,
  updateUserData
} = require('./userController');

const User = require('../models/userModel');

jest.mock('../models/userModel');
jest.mock('../utils/userUtils');

describe('UserController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given a getAllUsers controller', () => {
    req = {
      query: { user: ' ' }
    };
    describe('When is invoked', () => {
      describe('And the User.find resolves', () => {
        test('then call send', async () => {
          User.find.mockResolvedValue({ });
          await getAllUsers(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And User.find rejects', () => {
        beforeEach(async () => {
          User.find.mockRejectedValue(new Error('SERVER_ERROR'));
          await getAllUsers(req, res);
        });
        test('Then handleError call with 500', async () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });
        test('Then handleError send', () => {
          expect(res.send.mock.calls[0][0]).toBe('SERVER_ERROR');
        });
      });
    });
  });

  describe('Given a updateUserByid controller', () => {
    req = {
      params: { userId: 1 },
      body: { }
    };
    describe('And the User.findByIdAndUpdate resolves', () => {
      test('Then call send', async () => {
        User.findByIdAndUpdate.mockResolvedValue({ });
        await updatedUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndUpdate rejects', () => {
      beforeEach(async () => {
        User.findByIdAndUpdate.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await updatedUserById(req, res);
      });
      test('Then handleError call with 404', async () => {
        expect(res.status).toHaveBeenCalledWith(404);
      });
      test('Then handleError send', () => {
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });
  describe('Given a getUserById controller', () => {
    req = {
      params: { userId: 1 }
    };
    describe('And User.findById', () => {
      test('Then call send', async () => {
        User.findById.mockResolvedValue({ });
        await getUserById(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findById rejects', () => {
      beforeEach(async () => {
        User.findById.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await getUserById(req, res);
      });
      test('Then handleError call with 404', async () => {
        expect(res.status).toHaveBeenCalledWith(404);
      });
      test('Then handleError send', () => {
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });

  describe('Given a deleteUser controller', () => {
    req = {
      params: { userId: 1 }
    };
    describe('And User.findByIdAndDelete resolves', () => {
      test('Then call send', async () => {
        User.findByIdAndDelete.mockResolvedValue({ });
        await deleteUser(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndDelete rejects', () => {
      beforeEach(async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await deleteUser(req, res);
      });
      test('Then handleError call with 404', async () => {
        expect(res.status).toHaveBeenCalledWith(404);
      });
      test('Then handleError send', () => {
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });

    describe('Given an updateUserData controller', () => {
      beforeEach(() => {
        req = {
          params: { userId: 1 },
          body: { packCardId: ' ', type: 'cardsAdquired' }
        };
      });
      describe('And userFound.data.find resolves', () => {
        test('Then call send', async () => {
          User.findById.mockResolvedValue({ data: [{ packId: 4 }] });
          dataChanges.mockReturnValue();
          await updateUserData(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });
    });
  });
});
