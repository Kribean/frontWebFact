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

    // click on access
    cy.get('.todo-item').first().find('button').contains('Accéder').click()

    // check if page exist
    cy.contains('Tache:')

    // change state
    cy.get('#toggle').click()

    // modify
    cy.get('#modifyData').click()

    //clear area
    cy.get('#descriptionTextArea').clear()

    // enter content
    cy.get('#descriptionTextArea').type('testCypressSucceed')

    // Validate
    cy.get('#validateData').click()

    // go back to list of todos
    cy.get('#tasks').click()

    // due to the requirtement doesn't allow display of description, check visually if test succeed
    cy.wait(10000)

  });
});
