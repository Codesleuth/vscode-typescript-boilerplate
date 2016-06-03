import * as assert from 'assert'

describe('Some suite', () => {
	
	describe('Some functionality', () => {
		
		it('should really just pass', () => {
			assert.ok(true)
		})
    
    it('should really just fail', () => {
			assert.ok(false, 'Check file and line number - source map support!')
		})
		
	})
	
})