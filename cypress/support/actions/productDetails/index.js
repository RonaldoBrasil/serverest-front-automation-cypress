

export const ProductDetails = {
    verifyDetails: function (product) {
        cy.get('h2[data-testid="product-detail-name"]').should('to.contain', product.nome)
        cy.contains('h4', product.preco).should('be.visible')
        cy.contains('h4', product.descricao).should('be.visible')
        cy.contains('h4', product.quantidade).should('be.visible')
    }
}