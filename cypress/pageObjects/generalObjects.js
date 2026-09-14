export default class GeneralObjects {
  static searchInput(value) {
    cy.wait(600);
    cy.get('[data-testid="search-input"]').should("be.visible").clear().type(value);
    cy.wait(600);
  }

  static validateSearchResult(value) {
    cy.get('[data-testid="product-card"]')
      .should("be.visible")
      .should("have.length", 1)
      .contains(value);
  }

  static openProductDetails() {
    cy.wait(500);
    cy.get('[data-testid="product-card"]').should("be.visible").eq(0).click();
  }

  static emailInput(value) {
    cy.get('[data-testid="email-input"]').should("be.visible").clear().type(value);
  }

  static validateEmailInput() {
    cy.get('[data-testid="validate-email-button"]').should("be.visible").click();
  }

  static toast(value) {
    cy.get('[data-testid="toast"]').should("be.visible").should("contain.text", value);
  }

  static sendEmail() {
    cy.get('[data-testid="subscribe-button"]').should("be.visible").click();
  }
}
