//describe('FrontEnd Integration Tests', () => {
 // it("Renders default page on the screen successfully", () => {
   // cy.visit("http://localhost:3000/");

    //cy.get('[data-testid="welcome"]')
     // .should("exist")
      //.and("have.text", "You are welcome to my App Home Page");
 // });
 
//})

describe('Todo Component Tests', () => {
  //it('should render the table Heade', () => {
    
    //cy.visit('http://localhost:3000/todo'); 
    //cy.get('[data-testid="todo-header"]')
       //.should("exist")
       //.and("have.text", "Todo List"); // Table header
  //});

  //it('should render the table', () => {
   
    //cy.visit('http://localhost:3000/todo'); 
    //cy.get('[data-testid2="Add New Task"]').and("have.text", "Add New Task"); // Stil on the table header 

  //});

  it("should render the creat taske table", () => {
    cy.visit("http://localhost:3000/Create");
    cy.get('[data-testid3="Add New Task"]').should("have.text", "Add New Task");
  });


});

































  //it("Renders the task table on the screen successfully", () => {
   // cy.visit("http://localhost:3000/toto");

    //cy.get('[data-testid="table"]').should("exist")
      //.and("have.text", "You are welcome to my App Home Page");
    //cy.get('[data-testid="todo-header"]')
    //.should("exist")
   // .and("have.text", "Todo List");
 // }
//);