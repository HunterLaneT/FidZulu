describe('Laptop smoke test', () => {
    it('Visits the Laptop page', () => {
        cy.visit('/laptops');
        cy.get('body > app-header-footer > header').then(elem => {
            expect(elem[0].innerText).to.equal("Fid Zulu")
        })
    })

    it('should display Laptop', () => {
        cy.visit('/laptops');
        cy.get('table > thead > tr > th').then(elem => {
            expect(elem[0].innerText).to.equal('Product');
        })
        cy.get('table > tbody > tr > td').then(elem => {
            expect(elem[0].innerText).to.exist;
        });
    })
})