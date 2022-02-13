/* eslint-disable cypress/no-unnecessary-waiting */
describe('Create Campaign testing', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get("[data-cy='login-email-input']").type('ps.fabc.011772@gmail.com');
    cy.get("[data-cy='login-password-input']").type('Contra123*');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.get("[data-cy='new-campaign-button']").click();
  });
  it('Create Campaign view loads correctly (page 1)', () => {
    cy.contains('Inicia tu campaña').should('be.visible');
    cy.get('header')
      .should('be.visible')
      .within(() => {
        cy.get("[data-cy='menu-profile']").should('be.visible');
      });
    cy.get('Form')
      .should('be.visible')
      .within(() => {
        cy.get('input').should('have.length', 2);
      });
    cy.get("[data-cy='new-campaign-name-input']").type('Cypress Test');
    cy.get("[data-cy='new-campaign-country-input']").type('Brasil');
    cy.get("[data-cy='new-campaign-category-input']").select('Otros');
    cy.get("[data-cy='new-campaign-next-button']").click();
    cy.get("[data-cy='new-campaign-objective-input']").type('2800');
    cy.get("[data-cy='new-campaign-date-input']").type('2022-03-03');
    cy.get("[data-cy='new-campaign-next-2-button']").click();
    cy.get("[data-cy='new-campaign-title-input']").type('Testing from Cypress');
    cy.get("[data-cy='new-campaign-description-input']").type(
      'Just a simple end to end test',
    );
    cy.get("[data-cy='new-campaign-img-input']").attachFile('dogo_card.jpg');
    cy.wait(1800);
    cy.get("[data-cy='new-campaign-submmit-input']").click();
    cy.get("[data-cy='new-campaign-modal-button']").click();
    cy.contains('Testing from Cypress');
    cy.wait(1200);
    cy.get("[data-cy='your-campaigns-delete-button']").click();
    cy.get('.swal-button--confirm').click();
    cy.wait(1800);
    cy.contains('Tus campañas');
  });
});
