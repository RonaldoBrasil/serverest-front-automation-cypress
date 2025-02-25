import { Cart } from "../support/actions/cart"

describe.only('Dado que estou na página ed Carrinho', function () {

    beforeEach(function () {
        cy.fixture('login/successful').then(function (successful) {
            this.successful = successful
        })

    })

    it('Então o sistema deve retornar que a página ainda não está pronta', function () { 

        const user = this.successful.user
        
        cy.adjustUserData(user)

        Cart.go(user)
        Cart.notReadyMsgShouldBe('Em construção aguarde')

        

    })
})