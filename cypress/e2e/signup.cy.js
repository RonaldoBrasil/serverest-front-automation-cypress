import { Signup } from "../support/actions/singup"
import { Home } from "../support/actions/Home"
import { notification } from "../support/actions/components/notification"
import { Access } from "../support/actions/access"

describe('Dado que estou na página de cadastro', () => {

  context('Quando eu preencho dados de forma correta', function () {


    it('Então de deve ser possível criar uma conta como usuário ', () => {

      const user = {
        name: 'Ronaldo Brasil',
        email: 'ronaldotestesucesso@gmail.com',
        password: 'strongpassword12344321',
        adm: 'false'
      }

      cy.deleteUserByEmail(user.email)
      Signup.go()
      Signup.fillform(user)
      Signup.submit()
      Home.isVisible()
    })

    it('Então de deve ser possível criar uma conta como Administrador ', () => {

      const user = {
        name: 'Ronaldo Brasil ADM',
        email: 'ronaldoADM@gmail.com',
        password: 'strongpassword12344321',
        adm: 'true'
      }

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
        notification.errorMsgShouldBe(required.output)
        
      })
    })

    it('Então deve retornar mensagem após esvaziar campos', function () {

      const user = {
        name: 'Ronaldo Teste esvaziar campos',
        email: 'Ronaldo-teste-esvaziar-campos',
        password: 'teste',
        adm: 'false'

      }

      Signup.go()
      Signup.fillform(user)
      Signup.clearform()
      Signup.submit()
      notification.errorMsgShouldBe('Nome não pode ficar em branco')
      notification.errorMsgShouldBe('Email não pode ficar em branco')
      notification.errorMsgShouldBe('Password não pode ficar em branco')

    })

    it('Então não deve permitir logar sem preencher os campos', function () {

      Signup.go()
      Signup.submit()
      notification.errorMsgShouldBe('Nome é obrigatório')
      notification.errorMsgShouldBe('Email é obrigatório')
      notification.errorMsgShouldBe('Password é obrigatório')

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
