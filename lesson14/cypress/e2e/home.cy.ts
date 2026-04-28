describe('Heimasíða (E2E)', () => {
  it('sýnir haus og hækkar teljara', () => {
    cy.visit('/');
    cy.findByRole('heading', {
      name: /verkefni 14/i,
    }).should('be.visible');
    cy.findByRole('heading', { name: 'Teljari' }).should('be.visible');
    cy.findByRole('button', { name: 'Hækka' }).click();
    cy.findByText('1').should('be.visible');
  });
});
