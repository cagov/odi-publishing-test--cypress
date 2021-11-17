import dotenv from 'dotenv';

dotenv.config();

// @todo It would better if this increments but this will get us started.
const titleSlug = Math.floor(Math.random(999) * 999);

const variablesWP = {
  pathLogin: '/wp-login.php',
  selectorLogin: '#user_login',
  selectorPass: '#user_pass',
  username: Cypress.env('UN'),
  password: Cypress.env('PW'),
  stringTitle: `test-${titleSlug}`,
};

export default variablesWP;
