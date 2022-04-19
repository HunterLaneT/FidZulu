describe('Food smoke test', () => {
    it('Visits the Food page', () => {
        cy.visit('/food');
        cy.contains('Fid Zulu');
    })

    // it('should display Food', () => {
    //     cy.visit('/food');
    //     // cy.get('table > thead > tr > th').then(elem => {
    //     //     expect(elem[0].innerText).to.equal('Name');
    //     // })
    //     cy.get('table > tbody > tr > td').then(elem => {
    //         expect(elem[0].innerText).to.exist;
    //     });
    // })
})
