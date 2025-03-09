

export const ProductList = {

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userNome', user.name)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('admin/listarprodutos')
        this.isVisible()
    
    },

    isVisible: function () {
        cy.get('table tbody').should('be.visible')
    },

    findProductByName: function (name) {

        cy.contains('td', name).should('be.visible')
    },

    imagePathShouldBe: function (name, path) {
        cy.contains('td', name).should('be.visible')
            .parent()
            .find('td')
            .should('to.contain',path)
    },

    deleteProduct: function (product) {

        cy.contains('td', product.nome)
            .should('be.visible')
            .parent()
            .find('button[class$="btn-danger"]')
            .click()
    },

    editProduct: function (product) {

        cy.contains('td', product.nome)
            .should('be.visible')
            .parent()
            .find('button[class$="btn-danger"]')
            .click()
        cy.url().should('not.contain', 'listarprodutos')
    }

}