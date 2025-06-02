describe('Login', () => {
    it('Provide valid login credentials', () => {
        // navigate to saucedemo
        cy.visit('/')

        // enter username - 'standard_user'
        cy.get('input[placeholder="Username"').type('standard_user')

        // enter password - 'secret_sauce'
        cy.get('input[placeholder="Password"').type('secret_sauce')

        // press the login button
        cy.get('input').contains('Login').click()

        // assert url
        cy.url().should('include', '/inventory');
    })
})