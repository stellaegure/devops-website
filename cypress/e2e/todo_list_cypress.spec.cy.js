describe('ToDo List Tests', () => {
  beforeEach(() => {
    cy.visit('http://54.221.9.210/todolist.html');
  });

  it('Adds a task', () => {
    cy.get('#taskInput').type('Trying task 1');
    cy.get('#addButton').click();
    cy.contains('Trying task 1').should('be.visible');
  });
});
