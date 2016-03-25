import * as sinon from 'sinon'
import {SayGoodbye} from '../app/mymodule'

describe('My Module', () => {
	
	describe('#SayGoodbye', () => {
		
		it('should say goodbye', () => {
      let logSpy = sinon.spy()
      SayGoodbye(logSpy)
      
			sinon.assert.calledWith(logSpy, 'Goodbye :(')
		})
		
	})
	
})