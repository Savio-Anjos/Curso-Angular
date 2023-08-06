describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/');

    cy.get('button[id="teste"]').click();
  });
});
