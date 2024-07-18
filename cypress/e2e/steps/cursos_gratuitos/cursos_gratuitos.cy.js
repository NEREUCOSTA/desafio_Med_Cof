import cursos from '../../pages/cursos_gratuitos/cursos_gratuitos'

describe('Acessando links na home page', () => {
   beforeEach(() => {
       cy.visit('/');
   })
   it('Acessa curso gratuitos', () => {
       cursos.AcessarNossosCursos()
       cy.wait(1000); // Espera por 1 segundo (1000 milissegundos)

       
       
   })

   it('Validar acesso ao link cursos gratuito', () => {
        cursos.ValidarAcessoCursoGratuito()
        cy.wait(1000); // Espera por 1 segundo (1000 milissegundos)
        cy.screenshot(); // Salva a screenshot com um nome padrão


   });
})