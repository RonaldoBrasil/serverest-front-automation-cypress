

export const ProductList = {

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
    }

}