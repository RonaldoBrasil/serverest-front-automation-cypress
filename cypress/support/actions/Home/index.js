

export const Home = {
    isVisible: function () {
        cy.get('section[class="row espacamento"]').should('be.visible')
    },


    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('/home')
    },

    addProductToList: function (product) {
        cy.contains('h5', product.nome)
            .parent('div[class="card-body"]')
            .find('button').click()
    },

    shouldHaveProduct: function (product) {
        cy.contains('h5', product.nome).should('be.visible')

    },

    goToProductDetails: function (product) {
        cy.contains('h5', product.nome).should('be.visible')
            .parent('div[class="card-body"]').find('a[class="card-link"]').click()

    },

    searchProduct: function (product) {
        cy.get('input[type="search"]').type(product)
        cy.get('button[data-testid="botaoPesquisar"]').click()
    },

    notFoundShouldHaveTxt: function (message) {
        cy.contains('p', message).should('be.visible')
    },

    clickOnCart: function () {
        cy.get('a[data-testid="shopping-cart-button"]').click()
    }


}