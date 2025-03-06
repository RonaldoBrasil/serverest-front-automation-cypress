import { RegisterUser } from "./registerUser"
import { Cart } from "../cart"
import { UserList } from "./userList"
import { ProductList } from "./productList"
import { ProductRegister } from "./productRegister"

export const Admin = {
    isVisible: function(text){
         cy.get('h1').should('contain',text)
    },

    go: function (user) {

        cy.apiLogin(user).then(function (response) {
            window.localStorage.setItem('serverest/userEmail', user.email)
            window.localStorage.setItem('serverest/userNome', user.name)
            window.localStorage.setItem('serverest/userToken', response.body.authorization)
        })

        cy.visit('admin/home')
        this.isVisible(`Bem Vindo  ${user.name}`)
    },

    goToRegisterUser: function (){
        cy.get('a[data-testid="cadastrarUsuarios"]').click()
        RegisterUser.isVisible()
    },

    goToReports: function (){
        cy.get('a[data-testid="relatorios"]').click()
        Cart.notReadyMsgShouldBe('Em construção aguarde')
    },

    goToUserList: function () {
        cy.get('a[data-testid="listarUsuarios"]').click()
        UserList.isVisible()
        
    },

    goToProductRegister: function (){
        cy.get('a[data-testid="cadastrarProdutos"]').click()
        ProductRegister.isVisible()
    },

    goToProductList: function (){
        cy.get('a[data-testid="listarProdutos"]').click()
        ProductList.isVisible()
    },
     

}