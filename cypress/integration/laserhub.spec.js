describe("Laserhub_Test_Task", () => {
  beforeEach("visit_Laserhub_login_page", function () {
    cy.visit("/login");
    cy.accpet_cookies();
  });
  it("login_to_Laserhub_and_assert_login", () => {
    cy.login_to_Laserhub(
      "e.ioannidis+testing_worktask@laserhub.com",
      "l0vet3sting@"
    );
    // cy.contains("Wählen Sie ein Firmenkonto"); // for German
    cy.contains("Select a company account"); // for English
  });
});