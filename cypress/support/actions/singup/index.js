

export const Signup = {

    isVisible: function(){
        cy.get('.form').should('be.visible')
    }

}

export const SignupC = {
    isVisible: function(text){
         cy.get('h1').should('contain',text)
    }
}