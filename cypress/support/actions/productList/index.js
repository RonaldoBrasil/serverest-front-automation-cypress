

export const ProductList = {

    shouldBeVisible: function () {
        cy.get('h1').should('be.contain', 'Lista de Compras')
        
    },

    shouldHaveProduct: function (product) {
        this.shouldBeVisible()
        cy.get('div[data-testid="shopping-cart-product-name"]')
            .should('to.contain', product.nome)

    }
}