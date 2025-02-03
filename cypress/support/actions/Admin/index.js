

export const Admin = {
    isVisible: function(text){
         cy.get('h1').should('contain',text)
    }
     

}