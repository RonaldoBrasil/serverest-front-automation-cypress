import { Admin } from '../support/actions/Admin'
import { Header } from '../support/actions/components/header'


describe('Dado que estou na página inicial do Painel Admin', function () {

    beforeEach(function () {
        cy.fixture('login/successful').then(function (successful) {
            this.successful = successful
        })

    })

    it('Então deve ser possivel realizar logout', function () {

        const user = this.successful.admin
        cy.adjustUserData(user)

        Admin.go(user)
        Header.logout()

    })

    context('Quando clico no botão de um card da home', function () {

        it('Então deve ser possível ir para Cadastro de Usuários', function () {

            const user = this.successful.admin
            cy.adjustUserData(user)

            Admin.go(user)
            Admin.goToRegisterUser()

        })

        it('Então deve ser possível ir para Lista de Usuários', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.adjustUserData(user)

            Admin.go(user)
            Admin.goToUserList()

        })

        it('Então deve ser possível ir para Cadastro de Produtos', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.adjustUserData(user)


            Admin.go(user)
            Admin.goToProductRegister()

        })

        it('Então deve ser possível ir para Lista de Produtos', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.adjustUserData(user)


            Admin.go(user)
            Admin.goToProductList()

        })

        it('Então deve ser possível ir para Relatórios', function () {

            const user = this.successful.admin
            cy.adjustUserData(user)

            Admin.go(user)
            Admin.goToReports()
            

        })

    })

})

