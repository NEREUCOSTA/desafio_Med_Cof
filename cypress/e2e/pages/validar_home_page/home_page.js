class HomePage{

    validarHomePage(){
        
        cy.get('label > .flex').should('be.visible')
        }
        

    }
  
   
export default new HomePage;