import { ProductList } from "../../productList"
import { Cart } from "../../cart"
import { Home } from "../../Home"
import { Access } from "../../access"

export const Header = {

    goToProductList: function () {
        cy.get('a[data-testid="lista-de-compras"]').click()
        ProductList.shouldBeVisible()
    },

    goToCart: function () {
        cy.get('a[data-testid="carrinho"]').click()
        Cart.shouldBeVisible()

    },

    logout: function () {
        cy.get('button[data-testid="logout"]').click()
        Access.isVisible()

    },

    goToHome: function () {
        this.goToProductList()
        cy.get('a[data-testid="home"]').click()
        Home.isVisible()
    }
}