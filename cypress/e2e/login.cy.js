
 
 it('Teste 01 - login', function() {

    cy.api({
      url: 'https://serverest.dev/usuarios',
      method: 'POST',
      failOnStatusCode: false,
      body:{

        "nome": "Ronaldo Brasil",
        "email": "emailronaldoteste@gmail.com",
        "password": "strongpassword12344321",
        "administrador": "false"

      }
    })

    cy.visit('https://front.serverest.dev/login') 
    cy.get('input[data-testid="email"]').type('emailronaldoteste@gmail.com')
    cy.get('input[data-testid="senha"]').type('strongpassword12344321')
    cy.get('button[data-testid="entrar"]').click()
    cy.get('section[class="row espacamento"]').should('be.visible')
    

  })