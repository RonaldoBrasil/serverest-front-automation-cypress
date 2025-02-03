import { el } from "./elements"

import { Admin } from "../Admin"
import { Home } from "../Home"
import { Signup } from "../singup"


export const Access = {
    go: function(){
        cy.visit('/login') 
    },

    fillform: function(user){
    cy.get(el.email).type(user.email)
    cy.get(el.password).type(user.password)

    },

    clearform: function(){
        cy.get(el.email).clear()
        cy.get(el.password).clear()
    
        },

    submit: function(){
        cy.get(el.submit).click()
    },

    errorMsgShouldBe: function(message) {
        cy.contains('span' , message)
        
    },

    userShouldLogin: function(){
        Home.isVisible()
    },

    adminShouldLogin: function(text){
        Admin.isVisible(text)
    },

    goToSignup: function(){
        cy.get(el.goToSignup).click()
        Signup.isVisible()
    },

    outputShouldBe: function(text){
        cy.get(el.email)
            .invoke('prop', 'validationMessage')
            .should('to.contain', text)
    }

    
}