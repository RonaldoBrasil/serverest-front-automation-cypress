

export const Signup = {

    isVisible: function(){
        cy.get('.form').should('be.visible')
    }

}