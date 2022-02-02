/* eslint-disable quotes */
describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Fronpage can be opened', () => {
    cy.get('header')
      .should('be.visible')
      .within(() => {
        cy.get('text.boton')
          .first()
          .should('be.visible')
          .should('contain.text', 'Iniciar Sesión');
        cy.get('text.boton')
          .last()
          .should('be.visible')
          .should('contain.text', 'Registrarse');
      });

    /* cy.contains('Apoya'); */
  });
  it('login button', () => {
    cy.get(`[data-cy='login']`).click();
    cy.url().should('include', '/login');
  });
  it('register button', () => {
    cy.get(`[data-cy='register']`).click();
    cy.url().should('include', '/register');
  });
});
