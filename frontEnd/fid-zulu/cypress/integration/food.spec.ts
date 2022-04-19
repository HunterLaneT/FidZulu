describe('Food smoke test', () => {
    it('Visits the Food page', () => {
        cy.visit('/food');
        cy.contains('FidZulu');
    })

    it('should display Food', () => {
        cy.visit('/food');
        cy.get('table > tr > th').then(elem => {
            expect(elem[0].innerText).to.equal('Name');
        })
        cy.get('table > tr > td').then(elem => {
            expect(elem[0].innerText).to.exist;
        });
    })
})