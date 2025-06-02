import LoginPage from '../pages/loginPage';

describe('Login', () => {
  it('Provide valid login credentials', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    LoginPage.verifyLoginSuccess();
  });

  it('Provide invalid username credentials', () => {
    LoginPage.visit();
    //removed username
    LoginPage.enterPassword('secret_sauce');    
    LoginPage.clickLogin();
    LoginPage.verifyLoginUsernameErrorMessage();
  });

  it('Provide invalid password credentials', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    //removed password
    LoginPage.clickLogin();
    LoginPage.verifyLoginPasswordErrorMessage();
  });

  it('Provide invalid password credentials with reusable method', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    //removed password
    LoginPage.clickLogin();
    LoginPage.verifyLoginErrorMessage('Epic sadface: Password is required');
  });
});