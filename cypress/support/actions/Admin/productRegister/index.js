import { el } from "./elements"

export const ProductRegister = {

    isVisible: function () {
        cy.get(el.form).should('be.visible')
    },

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userNome', user.name)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('admin/cadastrarprodutos')
        this.isVisible()
    },

    fillform: function (product) {
        if (product.nome)              cy.get(el.name).type(product.nome)
        if (product.preco)             cy.get(el.preco).type(product.preco)
        if (product.descricao)         cy.get(el.descricao).type(product.descricao)
        if (product.quantidade)        cy.get(el.quantidade).type(product.quantidade)
        if (product.image)             cy.fixture(`products/images/${product.image}`).as('myImage')
        if (product.image)             cy.get(el.image).selectFile('@myImage')
    },
    clearform: function () {
        cy.get(el.name).clear()
        cy.get(el.preco).clear()
        cy.get(el.descricao).clear()
        cy.get(el.quantidade).clear()
    },

    submit: function () {
        cy.get(el.submit).click()
    },

    outputShouldBe: function (text) {
        cy.get(el.email)
            .invoke('prop', 'validationMessage')
            .should('to.contain', text)
    }

}