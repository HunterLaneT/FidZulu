describe('DVD smoke test', () => {
    it('Visits the DVD page', () => {
        cy.visit('/dvds');
        cy.get('body > app-header-footer > header').then(elem => {
            expect(elem[0].innerText).to.equal("Fid Zulu")
        })
    })

    it('should display DVDs', () => {
        cy.visit('/dvds');
        cy.get('table > thead > tr > th').then(elem => {
            expect(elem[0].innerText).to.equal('Title');
        })
        cy.get('table > tbody > tr > td').then(elem => {
            expect(elem[0].innerText).to.exist;
        });
    })
})