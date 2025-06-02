class LoginPage {
  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
  }

  clickLogin() {
    cy.get('input').contains('Login').click();
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/inventory');
  }

  verifyLoginUsernameErrorMessage() {
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required');
  }
  
  verifyLoginPasswordErrorMessage() {
    cy.get('[data-test="error"]').contains('Epic sadface: Password is required');
  }

  verifyLoginErrorMessage(errorMessage) {
    cy.get('[data-test="error"]').contains(errorMessage);
  }
}

export default new LoginPage();
