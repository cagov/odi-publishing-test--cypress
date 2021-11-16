describe('test_name', function () {

    it('what_it_does', function () {

        cy.viewport(1784, 1304)

        cy.visit('https://covid19.ca.gov/')

        cy.get('.hero-text-align > .link-arrow-medblue > cagov-arrow > .link-arrow-icon > .link-arrow-icon-svg').click()

        cy.visit('https://covid19.ca.gov/vaccines/')

        cy.get('.col-lg-10 > .toc > li:nth-child(4) > strong > a').click()

        cy.get('.container > .row > .col-lg-10 > p:nth-child(35) > a').click()

        cy.visit('https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/COVID-19/JnJ_factsheet.pdf')

        cy.visit('https://covid19.ca.gov/vaccines/#Side-effects')

        cy.get('.interior-page > .header > .header-wrap > .dropdown > #dropdown-menu-button').click()

        cy.get('.header > .header-wrap > .dropdown > .dropdown-menu > .dropdown-item:nth-child(5)').click()

        cy.visit('https://covid19.ca.gov/vi/vaccines/')

        cy.get('.interior-page > .header > .header-wrap > .dropdown > #dropdown-menu-button').click()

        cy.get('.header > .header-wrap > .dropdown > .dropdown-menu > .dropdown-item:nth-child(1)').click()

        cy.visit('https://covid19.ca.gov/vaccines/')

        cy.get('.header > .header-wrap > .header-search > .header-search-form > #header-search-site').click()

        cy.get('.header > .header-wrap > .header-search > .header-search-form > #header-search-site').click()

        cy.get('.header > .header-wrap > .header-search > .header-search-form > #header-search-site').click()

        cy.get('.header > .header-wrap > .header-search > .header-search-form > #header-search-site').click()

        cy.get('.header > .header-wrap > .header-search > .header-search-form > #header-search-site').type('san diego')

        cy.get('.header > .header-wrap > .header-search > .header-search-form > .header-search-button').click()

        cy.visit('https://covid19.ca.gov/search/?q=san%20diego#gsc.tab=0&gsc.q=san%20diego&gsc.page=1')

        cy.get('#answersNow > .prog-enhanced:nth-child(2) > .card > .card-header > .accordion-title').click()

    })

})
