

export const Notification = {
    errorMsgShouldBe: function (message) {
        cy.contains('span', message).should('be.visible')
    },
}