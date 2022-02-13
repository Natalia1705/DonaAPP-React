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
    cy.contains('Registrarse').should('be.visible');
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
  it('Register a new user with an taken email', () => {
    cy.get("[data-cy='register-name-input']").type('Fabrizzio Test');
    cy.get("[data-cy='register-email-input']").type('faker@gfake.com');
    cy.get("[data-cy='register-password-input']").type('Contra123*');
    cy.get("[data-cy='register-repeat-password-input']").type('Contra123*');
    cy.get("[data-cy='register-submmit-button']").click();
    cy.contains('El usuario ya existe, por favor inicia sesión');
  });
  it('Register a new user', () => {
    cy.get("[data-cy='register-name-input']").type('Fabrizzio Test');
    cy.get("[data-cy='register-email-input']").type('ps.fabc.011772@gmail.com');
    cy.get("[data-cy='register-password-input']").type('Contra123*');
    cy.get("[data-cy='register-repeat-password-input']").type('Contra123*');
    cy.get("[data-cy='register-submmit-button']").click();
    cy.contains('¡Estás a un solo paso de terminar tu registro!').should(
      'be.visible',
    );
  });
});
