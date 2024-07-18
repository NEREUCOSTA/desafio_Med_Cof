
class CursosGratuitos{
    AcessarNossosCursos(){
       
        cy.get('.mt-8 > .gap-3').click()

              
        
    }

    ValidarAcessoCursoGratuito(){
        cy.get('.mt-6 > :nth-child(4) > .font-mona').should('be.visible') 
               
    }

   
    }

    
 export default new CursosGratuitos;