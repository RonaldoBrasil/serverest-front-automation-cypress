

export const Cart = {
    shouldBeVisible: function(){
        cy.get('h1').should('to.contain', 'Em construção aguarde')
    }
}