describe("test CRUD and login for WebFactory project", () => {
  it("Remplit le formulaire de connexion et se connecte", () => {
    cy.visit("http://localhost:3001/"); // Access to page

    // check if page exists
    cy.contains("Webfactory");

    // go to login page
    cy.get("#login").click();

    // check if page exists
    cy.contains("Log In");

    // put a nickname
    cy.get("#nickname").type("jhon4");

    // put a password
    cy.get("#password").type("koulirou");

    // log in
    cy.get("#log").click();

    // check visual result
    cy.wait(10000);

    // check if the board page is loaded
    cy.contains("Mes tâches");

    // open modal
    cy.get("#create").click();

    // check if modal exists
    cy.contains("Créer une todo");

    // Enter the title 
    cy.get("#titleModal").type("cypress12");

    // Enter the description
    cy.get("#descriptionModal").type("ceci est un test cypress");

    // save
    cy.get("#saveModal").click();

    // Wait for 5 seconds
    cy.wait(5000);

    // check if the page contains the text "cypress12"
    cy.contains("cypress12");
  });
});
