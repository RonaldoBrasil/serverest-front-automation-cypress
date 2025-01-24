describe('Cadastro', () => {
    it('', () => {

      

      cy.visit('https://front.serverest.dev/login') 
      cy.get('a[data-testid="cadastrar"]').click()
      cy.get('input[data-testid="nome"]').type('Ronaldo Brasil')
      cy.get('input[data-testid="email"]').type('emailronaldoteste@gmail.com')
      cy.get('input[data-testid="password"]').type('strongpassword12344321')
      

    })
  })