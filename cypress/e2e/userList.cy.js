import { UserList } from "../support/actions/Admin/userList"

describe('Dado que estou na Lista de Usuários', function () {

    beforeEach(function () {
        cy.fixture('signup/successful').then(function (successful) {
            this.successful = successful
        })

        cy.fixture('signup/invalid').then(function (invalid) {
            this.invalid = invalid
        })


    })

    context('Quando clico no botão de "Excluir" ', function () {

        it('Então deve ser possível deletar o Usuário', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.adjustUserData(user)

            UserList.go(admin)
            UserList.deleteUser(user)

        })
    })

    context('Quando clico no botão de "Editar" ', function () {

        it('Então deve ser possível Editar o Usuário', function () {

            const admin = this.successful.admin
            const user = this.successful.user
            cy.adjustUserData(admin)
            cy.adjustUserData(user)

            UserList.go(admin)
            UserList.editUser(user)

        })
    })
})