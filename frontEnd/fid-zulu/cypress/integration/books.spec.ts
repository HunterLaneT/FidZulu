describe('Books smoke test', () => {
    it('Visits the Books page', () => {
        cy.visit('/books');
        cy.get('body > app-header-footer > header').then(elem => {
            expect(elem[0].innerText).to.equal("Fid Zulu")
        })
    })

    it('should display Books', () => {
        cy.visit('/books');
        cy.get('table > thead > tr > th').then(elem => {
            expect(elem[0].innerText).to.equal('Title');
        })
        cy.get('table > tbody > tr > td').then(elem => {
            expect(elem[0].innerText).to.exist;
        });
    })
})