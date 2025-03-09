

export const Reports = {

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userNome', user.name)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('admin/relatorios')
    
    },

    notReadyMsgShouldBe: function (msg) {

        cy.get('h1').should('have.text', msg)

    }

}