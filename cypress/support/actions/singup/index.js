import { el } from "./elements"
import { Admin } from "../Admin"

export const Signup = {
    Adm: function () {
        cy.get(el.AdmTrue).click()
    },

    go: function () {
        cy.visit('/cadastrarusuarios')
    },

    isVisible: function (text) {
        cy.get('.form').should('be.visible')
    },

    goToLogin: function (){
        cy.get(el.goToLogin).click()
    },

    fillform: function (user) {
        if ( user.name )           cy.get(el.name).type(user.name)
        if ( user.email )          cy.get(el.email).type(user.email)
        if ( user.password )       cy.get(el.password).type(user.password)
        if ( user.adm === "true" ) cy.get(el.AdmTrue).click()
    },
    clearform: function () {
        cy.get(el.name).clear()
        cy.get(el.email).clear()
        cy.get(el.password).clear()
    },

    submit: function () {
        cy.get(el.submit).click()
    },

    userShouldSignup: function (text) {
        Signup.isVisible(text)
    },

    adminShouldLogin: function (text) {
        Admin.isVisible(text)
    },

    outputShouldBe: function (text) {
        cy.get(el.email)
            .invoke('prop', 'validationMessage')
            .should('to.contain', text)
    }
}