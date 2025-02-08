

export const notification = {
    errorMsgShouldBe: function (message) {
        cy.contains('span', message)
    },
}