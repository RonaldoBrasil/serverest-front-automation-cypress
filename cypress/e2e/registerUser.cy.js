import { RegisterUser } from "../support/actions/Admin/registerUser"
import { UserList } from "../support/actions/Admin/userList"
import { Notification } from "../support/actions/components/Notification"

describe('Dado que estou na página de Registrar Usuário', function () {

    beforeEach(function () {
        cy.fixture('signup/successful').then(function (successful) {
            this.successful = successful
        })

        cy.fixture('signup/invalid').then(function (invalid) {
            this.invalid = invalid
        })


    })

    context('Quando eu preencho dados de forma correta', function () {

        it('Então de deve ser possível criar uma conta como usuário ', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.deleteUserByEmail(user.email)

            RegisterUser.go(admin)
            RegisterUser.fillform(user)
            RegisterUser.submit()
            UserList.findUserByEmail(user.email)

        })

        it('Então de deve ser possível criar uma conta como Administrador ', function () {

            const admin = this.successful.admin
            const user = this.successful.adminUser
            cy.adjustUserData(admin)
            cy.deleteUserByEmail(user.email)

            RegisterUser.go(admin)
            RegisterUser.fillform(user)
            RegisterUser.submit()
            UserList.findUserByEmail(user.email)

        })

    })

    context('Quando eu preencho os dados incorretamente', function () {

        const requiredFields = [
            { name: '', email: 'ronaldo-teste-sem-nome@qa.com', password: 'teste', output: 'Nome é obrigatório' },
            { name: 'ronaldo sem email ', email: '', password: 'teste', output: 'Email é obrigatório' },
            { name: 'ronaldo sem senha', email: 'ronaldo-teste-sem-senha@qa.com', password: '', output: 'Password é obrigatório' }

        ]

        requiredFields.forEach(function (required) {

            it(`Então o sistema deve retornar "${required.output}"`, function () {

                const admin = this.successful.admin

                cy.adjustUserData(admin)


                RegisterUser.go(admin)
                RegisterUser.fillform(required)
                RegisterUser.submit()
                Notification.errorMsgShouldBe(required.output)

            })
        })

        it('Então deve retornar mensagem após esvaziar campos', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.deleteUserByEmail(user.email)

            RegisterUser.go(admin)
            RegisterUser.fillform(user)
            RegisterUser.clearform()
            RegisterUser.submit()
            Notification.errorMsgShouldBe('Nome não pode ficar em branco')
            Notification.errorMsgShouldBe('Email não pode ficar em branco')
            Notification.errorMsgShouldBe('Password não pode ficar em branco')

        })

        it('Então não deve permitir logar com o email sem @', function () {

            const admin = this.successful.admin
            const user = this.invalid.badEmail
            cy.adjustUserData(admin)
            cy.deleteUserByEmail(user.email)

            RegisterUser.go(admin)
            RegisterUser.fillform(user)
            RegisterUser.submit()
            RegisterUser.outputShouldBe('Inclua um "@" no endereço de e-mail.')

        })

    })

})