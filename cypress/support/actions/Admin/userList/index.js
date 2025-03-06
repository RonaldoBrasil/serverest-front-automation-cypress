

export const UserList = {

    isVisible: function () {
        cy.get('table tbody').should('be.visible')
    },

    findUserByEmail: function (email) {

        cy.contains('td', email).should('be.visible')
    },

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userNome', user.name)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('admin/listarusuarios')
        this.isVisible()
    },

    deleteUser: function (user) {

        cy.contains('td', user.email)
            .should('be.visible')
            .parent()
            .find('button[class$="btn-danger"]')
            .click()
    },

    editUser: function (user) {

        cy.contains('td', user.email)
            .should('be.visible')
            .parent()
            .find('button[class$="btn-danger"]')
            .click()
        cy.url().should('not.contain', 'listarusuarios')
    },
}