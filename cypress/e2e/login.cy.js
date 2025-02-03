import { Access } from "../support/actions/access"


describe('Dado que estou na pagina de login',function(){

  context('Quando preencho o formulário com dados válidos',function(){

    it('Então deve ser possivel realizar o login como usuário', function() {

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
        Access.userShouldLogin()
    
    })

    it('Então deve ser possivel realizar o login como Admin', function() {

      const user = {
        name: 'Ronaldo Brasil ADM',
        email: 'emailronaldoteste-adm@gmail.com',
        password: 'strongpassword12344321',
        adm: 'true'
    
      }
    
      cy.deleteUserByEmail(user.email)
      cy.postUser(user)
    
        Access.go()
        Access.fillform(user)
        Access.submit()
        Access.adminShouldLogin(`Bem Vindo  ${user.name}`)
    
    })
    
  })

  context('Quando preencho o formulário com dados inválidos', function() {

    it('Então não deve ser possivel realizar o login com e-mail incorreto.', function() {
    
      const user = {
        name: 'Brasil Ronaldo email ruim',
        email: 'emailbrasilteste-email-incorreto@gmail.com',
        password: 'strongpassword12344321',
        adm: 'false'
    
      }
    
      cy.deleteUserByEmail(user.email)
    
        Access.go()
        Access.fillform(user)
        Access.submit()
        Access.errorMsgShouldBe('Email e/ou senha inválidos')
        
    })

    it('Então não deve ser possivel realizar o login com senha incorreta.', function() {
    
      const user = {
        name: 'Brasil Ronaldo senha ruim',
        email: 'emailbrasilteste-senha-incorreta@gmail.com',
        password: '123',
        adm: 'false'
    
      }
    
      cy.deleteUserByEmail(user.email)
    
        Access.go()
        Access.fillform(user)
        Access.submit()
        Access.errorMsgShouldBe('Email e/ou senha inválidos')
        
    })

    it('Então não deve ser possivel realizar o login sem "@".', function() {
    
      const user = {
        name: 'Brasil Ronaldo',
        email: 'emailbrasilteste',
        password: 'strongpassword12344321',
        adm: 'false'
    
      }
    
      cy.deleteUserByEmail(user.email)
    
        Access.go()
        Access.fillform(user)
        Access.submit()
        Access.outputShouldBe('Inclua um "@" no endereço de e-mail')
        
    })

    it('Então não deve permitir logar sem preencher os campos', function(){

      Access.go()
      Access.submit()
      Access.errorMsgShouldBe('Email é obrigatório')
      Access.errorMsgShouldBe('Password é obrigatório')

    })

    it('Então deve retornar mensagem após esvaziar campos', function(){

      const user = {
        name: 'Ronaldo Teste esvaziar campos',
        email: 'Ronaldo-teste-esvaziar-campos',
        password: 'teste',
        adm: 'false'
    
      }

      Access.go()
      Access.fillform(user)
      Access.clearform()
      Access.submit()
      Access.errorMsgShouldBe('Email não pode ficar em branco')
      Access.errorMsgShouldBe('Password não pode ficar em branco')

    })

  })

  context('Quando clico no botão "Cadastre-se"', function(){

    it('Então deve ser possível ir para a página de cadastro',function (){

      Access.go()
      Access.goToSignup()
      
    })

  })

})
 
