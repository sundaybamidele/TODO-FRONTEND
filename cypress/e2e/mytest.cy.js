describe('FrontEnd Integration Tests', () => {
 it("Renders default page on the screen successfully", () => {
   cy.visit("http://localhost:3000/");
   cy.get('[data-testid="welcome"]')
     .should("exist")
    .and("have.text", "You are welcome to my App Home Page");
 });
 
     //Successfuly executed the test case
  it('should render the table Header', () => {
    cy.visit('http://localhost:3000/todo'); 
    cy.get('[data-testid="todo-header"]')
       .should("exist")
       .and("have.text", "Todo List"); // Table header
  });

  //Successfuly executed the test case
  it('should render the Add New Task on the table', () => {
    cy.visit('http://localhost:3000/todo'); 
    cy.get('[data-testid2="Add New Task"]').should("have.text", "Add New Task"); // Still on the table header 
  });

   //Successfuly executed the test case
  it("should render the creat task table", () => {
    cy.visit("http://localhost:3000/todo/Create");
    cy.get('[data-testid3="Add New Task"]').should("have.text", "Add New Task");
  });

    //Successfuly executed the test case
  it("should render the content of About us page", () => {
    cy.visit("http://localhost:3000/about-us");
    cy.get('[data-testid4="about"]').should("have.text", "This app was developed under the supersion of Dr. Alix Bergeret. Lecturer in Computer Science, School of Computing and Mathematical Sciences, University of Wolverhampton. Email: alix.bergeret@wlv.ac.uk Office: MI115");
  });


     //Successfuly executed the test case
  it("should render the content of the page", () => {
    cy.visit("http://localhost:3000/contact-us");
    cy.get('[data-testid5="contact"]').should("have.text", "My name is Bamidele Joseph Sunday with Student Number 2304954. Learning Web Application is fun and interesting.");
  });


});