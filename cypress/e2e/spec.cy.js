describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://front.serverest.dev/login') // change URL to match your dev URL
    cy.get('input[data-testid="email"]').type('emailvalidoteste@hotmail.com')
    cy.get('input[data-testid="senha"]').type('senha123321ahnes')
    cy.get('button[data-testid="entrar"]').click()
    cy.get('section[class="row espacamento"]').should('be.visible')
    Cy.log('Teste para aula')

  })
})