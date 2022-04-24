describe("Upload", () => {
  beforeEach("Aplicattion Online", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Testando todo o envio de foto e envio de foto fora dos parâmetros", () => {
    cy.get("[data-cy=upload-image]").attachFile("image.png", {
      subjectType: "drag-n-drop",
      events: ["dragenter", "drop"],
    });

    cy.get("input[type=range]")
      .invoke("val", 5)
      .trigger("change");

    cy.get(".crop button").click();

    cy.get("[data-cy=upload-image]").attachFile("image-2.png", {
      subjectType: "drag-n-drop",
      events: ["dragenter", "drop"],
    });

    cy.get("input[type=range]")
      .invoke("val", 10)
      .trigger("change");

    cy.get(".crop button").click();

    cy.get("[data-cy=upload-image]").attachFile("image-error.png", {
      subjectType: "drag-n-drop",
      events: ["dragenter", "drop"],
    });

    cy.get(".paragraph-error").click();

    cy.get("[data-cy=upload-image]").attachFile("image-3.png", {
      subjectType: "drag-n-drop",
      events: ["dragenter", "drop"],
    });

    cy.get("input[type=range]")
      .invoke("val", 4)
      .trigger("change");

    cy.get(".crop button").click();
  });
});
