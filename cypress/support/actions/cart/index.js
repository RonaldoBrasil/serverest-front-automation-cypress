

export const Cart = {
    shouldBeVisible: function(){
        cy.get('h1').should('be.visible')
    },

    go: function () {
        cy.visit('/carrinho')
        this.shouldBeVisible()
        
    },

    notReadyMsgShouldBe: function (msg) {
        cy.get('h1').should('have.text', msg )
    }
}