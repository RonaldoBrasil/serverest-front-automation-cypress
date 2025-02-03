import { el } from "./elements"

import { elC } from "./elements"


import { Admin } from "../Admin"
import { Home } from "../Home"
import { Signup, SignupC } from "../singup"


export const Access = {
    
    Adm: function(){
        cy.get(elC.AdmTrue).click()

    },


    go: function(){
        cy.visit('/login') 
    },

    goC: function(){
        cy.visit('/cadastrarusuarios') 
    },

    fillform: function(user){
    cy.get(el.email).type(user.email)
    cy.get(el.password).type(user.password)

    },

    fillformC: function(user){
        cy.get(elC.name).type(user.name)
        cy.get(elC.email).type(user.email)
        cy.get(elC.password).type(user.password)
        
        },

    clearform: function(){
        cy.get(el.email).clear()
        cy.get(el.password).clear()
    
        },

    submit: function(){
        cy.get(el.submit).click()
    },

    submitC: function(){
        cy.get(elC.submit).click()
    },

    errorMsgShouldBe: function(message) {
        cy.contains('span' , message)
        
    },

    userShouldLogin: function(){
        Home.isVisible()
    },

    userShouldSignup: function(text){
        SignupC.isVisible(text)
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