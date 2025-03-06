import { Signup } from "../support/actions/singup"
import { Home } from "../support/actions/Home"
import { Notification } from "../support/actions/components/notification"
import { Access } from "../support/actions/access"

describe('Dado que estou na página de cadastro', () => {

  beforeEach(function(){
    cy.fixture('signup/successful').then(function(successful) {
      this.successful = successful
    })
  })

  beforeEach(function(){
    cy.fixture('signup/invalid').then(function(invalid) {
      this.invalid = invalid
    })
  })

  context('Quando eu preencho dados de forma correta', function () {

    it('Então de deve ser possível criar uma conta como usuário ', function () {

      const user = this.successful.user
        
      cy.deleteUserByEmail(user.email)
      Signup.go()
      Signup.fillform(user)
      Signup.submit()
      Home.isVisible()
    })

    it('Então de deve ser possível criar uma conta como Administrador ', function () {

      const user = this.successful.admin

      cy.deleteUserByEmail(user.email)
      Signup.go()
      Signup.fillform(user)
      Signup.submit()
      Signup.adminShouldLogin(`Bem Vindo  ${user.name}`)
    })

  })

  context('Quando eu preencho os dados incorretamente', function () {

    const requiredFields = [
      { name: '', email: 'ronaldo-teste-sem-nome@qa.com', password: 'teste',                 output: 'Nome é obrigatório'      },
      { name: 'ronaldo sem email ', email: '', password: 'teste' ,                           output: 'Email é obrigatório'     },
      { name: 'ronaldo sem senha', email: 'ronaldo-teste-sem-senha@qa.com', password: '',    output: 'Password é obrigatório'  }

    ]

    requiredFields.forEach(function(required){
    
      it(`Então o sistema deve retornar "${required.output}"`, function(){
        Signup.go()
        Signup.fillform(required)
        Signup.submit()
        Notification.errorMsgShouldBe(required.output)
        
      })
    })

    it('Então deve retornar mensagem após esvaziar campos', function () {

      const user = this.invalid.clear

      Signup.go()
      Signup.fillform(user)
      Signup.clearform()
      Signup.submit()
      Notification.errorMsgShouldBe('Nome não pode ficar em branco')
      Notification.errorMsgShouldBe('Email não pode ficar em branco')
      Notification.errorMsgShouldBe('Password não pode ficar em branco')

    })

    it('Então não deve permitir logar com o email sem @', function () {

      const user = this.invalid.badEmail

      Signup.go()
      Signup.fillform(user)
      Signup.submit()
      Signup.outputShouldBe("Please include an '@' in the email address.")
      
    })

  })

  context('Quando clico no botão "Entrar"',function(){

    it('Então deve ser possive acessar a página de Login', function(){

      Signup.go()
      Signup.goToLogin()
      Access.isVisible()
      
    })

  })
})
