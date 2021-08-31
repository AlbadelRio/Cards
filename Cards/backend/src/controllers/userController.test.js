const {
  createUser,
  getAllUsers,
  updatedUserById,
  getUserById,
  deleteUser
} = require('./userController');

const User = require('../models/userModel');

jest.mock('../models/userModel');

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

  describe('Given a createUser controller', () => {
    req = {
      body: { }
    };
    describe('When is invoked', () => {
      describe('And the User.create resolves', () => {
        test('then call send', async () => {
          User.create.mockResolvedValue({ username: ' ' });
          await createUser(req, res);
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.create rejects', () => {
        test('Then handleError call with 500', async () => {
          User.create.mockRejectedValue(new Error('CREATE_ERROR'));
          await createUser(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.send.mock.calls[0][0]).toBe('CREATE_ERROR');
        });
      });
    });
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
        test('Then handleError call with 500', async () => {
          User.find.mockRejectedValue(new Error('SERVER_ERROR'));
          await getAllUsers(req, res);
          expect(res.status).toHaveBeenCalledWith(500);
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
    describe('And the User.findByIdAndUpdate', () => {
      test('Then call send', async () => {
        User.findByIdAndUpdate.mockResolvedValue({ });
        await updatedUserById(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndUpdate rejects', () => {
      test('Then handleError call with 404', async () => {
        User.findByIdAndUpdate.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await updatedUserById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
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
      test('Then handleError call with 404', async () => {
        User.findById.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await getUserById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });
  describe('Given a deleteUser controller', () => {
    req = {
      params: { userId: 1 }
    };
    describe('And User.findByIdAndDelete', () => {
      test('Then call send', async () => {
        User.findByIdAndDelete.mockResolvedValue({ });
        await deleteUser(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And User.findByIdAndDelete rejects', () => {
      test('Then handleError call with 404', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('USER_NOT_FOUND_ERROR'));
        await deleteUser(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send.mock.calls[0][0]).toBe('USER_NOT_FOUND_ERROR');
      });
    });
  });
});
