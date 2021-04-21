'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***Validator Test***', () => {
  it('should respond with a 500 on an error', () => {
    return mockRequest.get('/person').then(data => {
      expect(data.status).toBe(500);
    })
  });

  it('should respond properly to a GET: /person', async () => {
    const response = await mockRequest.get('/person?name=Dan');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Dan');
  });

});
