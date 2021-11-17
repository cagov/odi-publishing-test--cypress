import configSite from '../settings/configSite';
import variablesWP from '../settings/WPVariables.js';

  const pageViewing = `${configSite.dev.urlViewing}/${variablesWP.stringTitle}`;


describe('publishing', () => {

  it('post', function () {
    cy.viewport(1784, 1304)

    cy.visit(configSite.dev.urlEditing + variablesWP.pathLogin);
    cy.get(variablesWP.selectorLogin).click();
    cy.get(variablesWP.selectorLogin).type(variablesWP.username);

    cy.get(variablesWP.selectorPass).click();
    cy.get(variablesWP.selectorPass).type(variablesWP.password);

    cy.get('[type=Submit]').click();

    cy.get('#wp-admin-bar-new-content > .ab-sub-wrapper > #wp-admin-bar-new-content-default > #wp-admin-bar-new-post > .ab-item').click({ force: true })
 
    cy.get('div > .editor-styles-wrapper > .edit-post-visual-editor__post-title-wrapper > .wp-block > #post-title-0').click({ force: true })
    cy.get('div > .editor-styles-wrapper > .edit-post-visual-editor__post-title-wrapper > .wp-block > #post-title-0').type(variablesWP.stringTitle)
 
    cy.get('.interface-interface-skeleton__editor > .interface-interface-skeleton__header > .edit-post-header > .edit-post-header__settings > .editor-post-publish-panel__toggle').click()
 
    cy.get('div > .editor-post-publish-panel > .editor-post-publish-panel__header > .editor-post-publish-panel__header-publish-button > .components-button').click({ force: true })
 
 
    cy.get('.editor-post-publish-panel__content > .post-publish-panel__postpublish > .components-panel__body > .post-publish-panel__postpublish-buttons > .components-button:nth-child(1)').click({ force: true })
 
        

  });
  
  it('view', function () {
     // Go to Viewing URL
      cy.wait(120000)
      cy.visit('http://development.sand.ca.gov.s3-website-us-west-1.amazonaws.com/test-831')
      cy.get('.page-title').should('have.text', 'test-831')
  })

})
