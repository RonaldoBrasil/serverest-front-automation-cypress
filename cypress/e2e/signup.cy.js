import { Access } from "../support/actions/access"

describe('Dado que estou na página de cadastro', () => {

  context('Quando preencho os campos com dados de forma correta sem selecionar a caixa de administrador', function(){

  
    it('Então de deve ser possível criar uma conta como usuário ', () => {

      const user = {
        name: 'Ronaldo Brasil',
        email: 'emailronaldoteste@gmail.com',
        password: 'strongpassword12344321',
        adm: 'false'
      }

      cy.deleteUserByEmail(user.email)
      Access.goC()
      Access.fillformC(user)
      Access.submitC()
      Access.userShouldSignup('Serverest Store')
    })
    
  })

  context('Quando preencho os campos com dados de forma correta e seleciono a caixa de administrador', function(){

  
    it('Então de deve ser possível criar uma conta como Administrador ', () => {

      const user = {
        name: 'Ronaldo Brasil ADM',
        email: 'emailronaldoADM@gmail.com',
        password: 'strongpassword12344321',
        adm: 'True'
      }

      cy.deleteUserByEmail(user.email)
      Access.goC()
      Access.fillformC(user)
      Access.Adm()
      Access.submitC()
      Access.userShouldSignup(`Bem Vindo  ${user.name}`)
    })
 
  })

})
