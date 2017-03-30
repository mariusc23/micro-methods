const { expect } = require('chai')
const sinon = require('sinon')
const { allowMethods } = require('../')

describe('allowMethods', () => {
  const res = {}
  const handler = sinon.spy()

  afterEach(() => {
    handler.reset()
  })

  it('should allow valid method', () => {
    const req = {
      method: 'GET',
    }
    const middleware = allowMethods(['GET'])
    middleware(handler)(req, res)
    expect(handler.calledWith(req, res)).to.equal(true)
  })

  it('should throw for invalid method', () => {
    const req = {
      method: 'GET',
    }
    const middleware = allowMethods(['POST'])
    try {
      middleware(handler)(req, res)
    } catch (err) {
      expect(err.statusCode).to.equal(405)
      expect(err.message).to.equal('Method Not Allowed')
    }
  })
})
