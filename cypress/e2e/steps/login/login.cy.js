import login from '../../pages/validar_home_page/home_page'
describe('Acessar o portal Grupo medcof', () => {
    context('Context', () => {
        // code here

        beforeEach(() => {
            cy.visit('/')
            
        })
   it('validar a página inicial', () => {
       login.validarHomePage()
   })
})
})