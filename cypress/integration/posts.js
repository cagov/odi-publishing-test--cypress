import configSite from '../settings/configSite';
import variablesWP from '../settings/WPVariables.js';

  const pageViewing = `${configSite.dev.urlViewing}/${variablesWP.stringTitle}`;


describe('publishing', function () {

    it('post', function () {
      cy.viewport(1784, 1304)

      cy.visit(configSite.dev.urlEditing + variablesWP.pathLogin);
      cy.get(variablesWP.selectorLogin).click();
      cy.get(variablesWP.selectorLogin).type(variablesWP.username);

      cy.get(variablesWP.selectorPass).click();
      cy.get(variablesWP.selectorPass).type(variablesWP.password);

      cy.get('[type=Submit]').click();

      // Create new Wordpress post.
      cy.click('span:has-text("New")');
      cy.click('[aria-label="Close dialog"]');
      cy.click('#post-title-0');
      cy.type('#post-title-0', variablesWP.stringTitle);

      // Publish post.
      cy.click('[aria-label="Document tools"]');
      cy.click('button:has-text("Publish")');
      cy.click('[aria-label="Editor publish"]:has-text("Publish")', { force: true });
      cy.click(`a:has-text("${variablesWP.stringTitle}")`);
    
      // expect(page).toHaveURL(`${configSite.dev.urlEditing}/${variablesWP.stringTitle}/`);
  
      // Go to Viewing URL
      cy.wait(4000)
      cy.visit('http://development.sand.ca.gov.s3-website-us-west-1.amazonaws.com/test-831')
      cy.get('.page-title').should('have.text', 'test-831')



        

    })

})
