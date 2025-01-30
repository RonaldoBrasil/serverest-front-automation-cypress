import { Home } from "./Home"

export const Access = {
    go: function(){
        cy.visit('/login') 
    },

    fillform: function(user){
    cy.get('input[data-testid="email"]').type(user.email)
    cy.get('input[data-testid="senha"]').type(user.password)

    },

    submit: function(){
        cy.get('button[data-testid="entrar"]').click()
    },

    errorMsgShouldBe: function(message) {
        cy.get('div[role=alert] button')
            .siblings()
            .should('contain.text', message)
            },

    shouldLogin: function(){
        Home.shouldBeVisible()
    }

    
}