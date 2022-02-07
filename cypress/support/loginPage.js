Cypress.Commands.add("accpet_cookies", (email, password) => {
  cy.get("#onetrust-accept-btn-handler").click();
});
Cypress.Commands.add("login_to_Laserhub", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get(".btn-block").click();
});
