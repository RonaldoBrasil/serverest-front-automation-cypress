 

 export const Home = {
    isVisible: function(){
        cy.get('section[class="row espacamento"]').should('be.visible')
    }
 }