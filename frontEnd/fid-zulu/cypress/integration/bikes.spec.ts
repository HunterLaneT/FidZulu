describe('Bikes smoke test', () => {
    it('Visits the bike page', () => {
        cy.visit('/bikes');
        cy.get('body > app-header-footer > header').then(elem => {
            expect(elem[0].innerText).to.equal("Fid Zulu")
        })
    })

    it('should display Bikes', () => {
        cy.visit('/bikes');
        cy.get('table > thead > tr > th').then(elem => {
            expect(elem[0].innerText).to.equal('Name');
        })
        cy.get('table > tbody > tr > td').then(elem => {
            expect(elem[0].innerText).to.exist;
        });
    })
})