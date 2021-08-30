const { createCard }= require('../controllers/cardController');
const Card = require('../models/cardModel');


jest.mock('../models/cardModel');

describe('CardController',()=>{
    let req;
    let res;

    beforeEach(() => {
        res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
        };
        
    });
    describe('Given a createCard controller', () =>{
        req ={
            body: { }
        };
        describe('When is invoked', () =>{
            describe('And the Card.create resolves', () =>{
                test('then call send', async () => {
                    Card.create.mockResolvedValue({ });
                    await createCard(req, res);
                    expect(res.json).toHaveBeenCalled();
                });
            });
            describe('And Card.create rejects', () =>{
                test('Then handleError call with 500', async () => {
                    Card.create.mockRejectedValue(new Error('CREATE_ERROR'));
                    await createCard(req, res);
                    expect(res.status).toHaveBeenCalledWith(500);
                    expect(res.send.mock.calls[0][0]).toBe('CREATE_ERROR');
                });
            });
        });
    });
});