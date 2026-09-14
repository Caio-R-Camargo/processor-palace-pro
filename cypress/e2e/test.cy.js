import GeneralObjects from "../pageObjects/generalObjects";

describe("Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Filters", () => {
    it("should search for CPU Intel successfully", () => {
      GeneralObjects.searchInput("13700F");
      GeneralObjects.validateSearchResult("Intel Core i7-13700F");
    });

    it("should search for CPU AMD successfully", () => {
      GeneralObjects.searchInput("5600X");
      GeneralObjects.validateSearchResult("AMD Ryzen 5 5600X");
    });

    it("should search for CPU APPLE successfully", () => {
      GeneralObjects.searchInput("M2 Pro");
      GeneralObjects.validateSearchResult("Apple M2 Pro");
    });
  });

  context("Email sending", () => {
    it("should validate email successfully", () => {
      GeneralObjects.openProductDetails();
      GeneralObjects.validateEmailInput();
      GeneralObjects.toast("Digite um endereço de e-mail válido.");
    });

    it("should send email successfully", () => {
      GeneralObjects.openProductDetails();
      GeneralObjects.emailInput("test@example.com");
      GeneralObjects.validateEmailInput();
      GeneralObjects.toast("E-mail válido!Agora você pode enviar sua inscrição.");
      GeneralObjects.sendEmail();
      GeneralObjects.toast(
        "Você receberá novidades de Intel Core Ultra 9 285K em test@example.com.",
      );
    });
  });
});
