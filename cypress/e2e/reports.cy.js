import { Reports } from "../support/actions/Admin/reports"

describe('Dado que estou na página de relatórios', function () {

    beforeEach(function () {
        cy.fixture('login/successful').then(function (successful) {
            this.successful = successful
        })

    })

    it('Então o sistema deve retornar que a página ainda não está pronta', function () { 

        const user = this.successful.admin
        
        cy.adjustUserData(user)

        Reports.go(user)
        Reports.notReadyMsgShouldBe('Em construção aguarde')

        

    })
})