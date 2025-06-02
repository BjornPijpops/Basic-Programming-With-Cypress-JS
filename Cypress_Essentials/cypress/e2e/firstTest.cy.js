describe('name of test suite', () => {
	it('first test', () => {
		// by Tag
		cy.get('input')

		// by ID
		cy.get('#inputEmail')

		// by Class
		cy.get('.input-full')

		// by Attribute Name
		cy.get('[placeholder]')

		// by Attribute Name and value
		cy.get('[placeholder="Email"]')

		// by Entire Class
		cy.get('[class="input-full size-medium blue"]')

		// by Multiple Attributes
		cy.get('[class="input-full size-medium blue"][placeholder="Email"]')

		// by Cypress Test ID
		cy.get('[data-cy="inputEmail"]')

		// by Text
		cy.contains('Sign in')

		// by Attribute and Text
		cy.contains('[status="warning"]', 'Sign in')
	})

	it.only('second test', () => {
		cy.visit('/')

		// get() - find elements on the page by locator (globally)
		// find() - find child elements by locator
		// contains() - find text and locator

		cy.get('input[placeholder="Username"]')
		cy.contains('Login')

		cy.get(".login-box").contains('Login')
		cy.get(".login-box").find('input[placeholder="Username"]')
	})

	it('second test', () => {
		// code of test
	})

	context('name of suite within suite!', () => {
		beforeEach('login', () => {
			//repeat for every test inside THIS suite
		})

  		it('first suite embedded test', () => {
    		// code of test
    	})
	})
})
