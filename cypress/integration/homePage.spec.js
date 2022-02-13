describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Fronpage can be opened', () => {
    cy.contains('Apoya una noble causa').should('be.visible');
    cy.get('header')
      .should('be.visible')
      .within(() => {
        cy.get("[data-cy='login-button']")
          .should('be.visible')
          .should('contain.text', 'Iniciar Sesión');
        cy.get("[data-cy='register-button']")
          .should('be.visible')
          .should('contain.text', 'Registrarse');
      });
    cy.get("[data-cy='new-campaign-button']")
      .should('be.visible')
      .should('contain.text', 'Inicia tu campaña ahora');
    cy.get("[data-cy='campaign-home-cards']").should('be.visible');
  });
  it('login button works', () => {
    cy.get("[data-cy='login-button']").click();
    cy.url().should('include', '/login');
  });
  it('register button works', () => {
    cy.get("[data-cy='register-button']").click();
    cy.url().should('include', '/register');
  });
  it('new campaign button works', () => {
    cy.get("[data-cy='new-campaign-button']").click();
    cy.url().should('include', '/campaignform');
  });
});
