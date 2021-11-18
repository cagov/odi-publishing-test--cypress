

const variablesWP = {
  pathLogin: '/wp-login.php',
  selectorLogin: '#user_login',
  selectorPass: '#user_pass',
  username: Cypress.env('UN'),
  password: Cypress.env('PW'),
  stringTitle: `test-${Cypress.env('titleSlug')}`,
};

export default variablesWP;
