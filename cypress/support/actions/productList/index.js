import { Home } from "../Home"
import { Cart } from "../cart"

export const ProductList = {

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('/minhaListaDeProdutos')
        this.shouldBeVisible()
    },
    
    shouldBeVisible: function () {
        cy.get('h1').should('be.contain', 'Lista de Compras')
        
    },

    shouldHaveProduct: function (product) {
        this.shouldBeVisible()
        cy.get('div[data-testid="shopping-cart-product-name"]')
            .should('to.contain', product.nome)

    },

    emptyListShouldHaveTxt: function (txt){
        cy.get('p[data-testid="shopping-cart-empty-message"]').should('to.contain', txt)
    },

    goToHome: function (){
        cy.get('button[data-testid="paginaInicial"]').click()
        Home.isVisible()
    },

    clearList: function () {
        cy.get('button[data-testid="limparLista"]').click()
    },

    addToCart: function () {
        cy.get('button[data-testid="adicionar carrinho"]').click()
        Cart.shouldBeVisible()
    },

    increaseQuantity: function (product) {
        cy.get('button[data-testid="product-increase-quantity"]').click()
            cy.contains('p', 'Preço')
                .should('to.contain', `${product.amount * product.preco + product.preco}`)
    },

    decreaseQuantity: function (product) {
        cy.get('button[data-testid="product-decrease-quantity"]').click()
            cy.contains('p', 'Preço')
                .should('to.contain', `${product.amount * product.preco - product.preco}`)
    }
}