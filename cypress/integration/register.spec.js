describe('Register testing', () => {
  beforeEach(() => {
    cy.visit('/register');
  });
  after(() => {
    cy.request(
      'DELETE',
      'https://fast-shelf-59848.herokuapp.com/api/user/testdelete',
    );
  });
  it('Register view loads correctly', () => {
    cy.contains('Registro').should('be.visible');
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
    cy.get('Form')
      .should('be.visible')
      .within(() => {
        cy.get('input').should('have.length', 4);
      });
    cy.get("[data-cy='register-submmit-button']")
      .should('be.visible')
      .should('contain.text', 'Registrarse');
  });
  it('Register a new user', () => {
    cy.get("[data-cy='register-name-input']").type('cypressTest');
    cy.get("[data-cy='register-email-input']").type('cypressTest@fakemail.com');
    cy.get("[data-cy='register-password-input']").type('Cypress123*');
    cy.get("[data-cy='register-repeat-password-input']").type('Cypress123*');
    cy.get("[data-cy='register-submmit-button']").click();
    cy.url().should('include', '/campaigns');
  });
  it('Register a new user with an taken email', () => {
    cy.get("[data-cy='register-name-input']").type('cypressTest');
    cy.get("[data-cy='register-email-input']").type('cypressTest@fakemail.com');
    cy.get("[data-cy='register-password-input']").type('Cypress123*');
    cy.get("[data-cy='register-repeat-password-input']").type('Cypress123*');
    cy.get("[data-cy='register-submmit-button']").click();
    cy.contains('El usuario ya existe, por favor inicia sesión');
  });
});
