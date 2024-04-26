describe('API Integration Tests', () => {
    it('should fetch Task from the API', () => {
      cy.request('GET', 'http://127.0.0.1:8000/api/todo')
        .then((response) => {
          // Verify that the response status is 200
          expect(response.status).to.equal(200);
  
          // Verify that the response contains data
          expect(response.body).to.not.be.empty;
  
          // you can verify specific properties of the response data
          // if the response contains an array of todos, you can check its length
          expect(response.body.todos).to.have.lengthOf.at.least(1);
        });
    });
  
    it('should create a new Task via API', () => {
      cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/todo',
        body: {
          title: 'FrontEnd Integration Tests one',
          description: 'This is another new task created via API',
          status: '0'
        },
      }).then((response) => {
        // Verify that the response status is 201 (created)
        expect(response.status).to.equal(200);
  
        // Optionally, you can verify the response body or headers
        expect(response.body.message).to.equal('Data saved successfully');
      });
    });

    it('should fetch tasks via API', () => {
      cy.request({
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/todo', // Adjust the URL according to your API endpoint
      }).then((response) => {
        // Verify that the response status is 200 (OK)
        expect(response.status).to.equal(200);
      
        // Verify that the response body contains an array of tasks
       // expect(response.body).to.be.an('array');
        
        // Optionally, you can verify the structure of each task object
        if (response.body.length > 0) {
          const firstTask = response.body[0];
          expect(firstTask).to.have.property('title');
          expect(firstTask).to.have.property('description');
          expect(firstTask).to.have.property('status');
        }
      });
    });   
    
  
    // Add more test cases for other API endpoints as needed
  });
  