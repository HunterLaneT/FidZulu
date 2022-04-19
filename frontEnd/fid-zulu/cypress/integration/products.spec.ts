describe('Home page smoke test', () => {
    it('Visits the home page', () => {
        cy.visit('/');
        cy.get('body > app-header-footer > header').then(elem => {
            expect(elem[0].innerText).to.equal("Fid Zulu")
        })
    })

    it('should display all tables', () => {
        cy.visit('/');
        cy.get('table').then(elem => {
            expect(elem.length).to.equal(6);
        })
    })
})