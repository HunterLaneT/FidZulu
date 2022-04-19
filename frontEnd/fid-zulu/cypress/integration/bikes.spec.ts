describe('Bikes smoke test', () => {
    it('Visits the bike page', () => {
        cy.visit('/');
        cy.contains('FidZulu');
    })
})