import { Access } from "../support/actions/access"

 
 it('LOGIN com sucesso', function() {

  const user = {
    name: 'Ronaldo Brasil',
    email: 'emailronaldoteste@gmail.com',
    password: 'strongpassword12344321',
    adm: 'false'

  }

  cy.deleteUserByEmail(user.email)
  cy.postUser(user)

    Access.go()
    Access.fillform(user)
    Access.submit()
    Access.shouldLogin()

})

it.only('LOGIN sem sucesso', function() {

  const user = {
    name: 'Brasil Ronaldo',
    email: 'emailbrasilteste@gmail.com',
    password: 'strongpassword12344321',
    adm: 'false'

  }

  cy.deleteUserByEmail(user.email)


    Access.go()
    Access.fillform(user)
    Access.submit()
    Access.errorMsgShouldBe('Email e/ou senha inválidos')
    

})