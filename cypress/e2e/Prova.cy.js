describe("Registro na plataforma toolsqa", () => {
  it("Fazer uma compra na tela do carrinho", () => {
    cy.visit("https://www.demoblaze.com/cart.html");

    cy.get(".col-lg-1 > .btn").click();

    cy.get("#name").type("Francisco");
    cy.get("#country").type("Brasil");
    cy.get("#city").type("São Paulo");
    cy.get("#card").type("123456789");
    cy.get("#month").type("12");
    cy.get("#year").type("2022");
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();

    cy.get(".sweet-alert > h2").should(
      "have.text",
      "Thank you for your purchase!"
    );
  });

  it("Fazer o registro de um usuário novo", () => {
    const {name, password} = getRandomUser();
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#signin2").click();

    cy.get("#sign-username").type(name);
    cy.get("#sign-password").type(password);

    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Sign up successful.");
    });
  });

  //Caso negativo de teste
  it("Falha ao fazer login com usuário não registrado", () => {
    const {name, password} = getRandomUser();
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();

    cy.get("#loginusername").type(name);
    cy.get("#loginpassword").type(password);
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("User does not exist.");
    });
  });
});

const getRandomUser = () => {
  const date = new Date();
  return {
    name: `Francisco ${date.getTime()}`,
    password: `${date.getTime()}`,
  };
};
