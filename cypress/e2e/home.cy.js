import { Home } from "../support/actions/Home"

describe('Dado que estou na Página de Inicial', function () {

  beforeEach(function () {
    cy.fixture('login/successful').then(function (successful) {
      this.successful = successful
    })

    cy.fixture('products/tech').then(function (tech) {
      this.tech = tech
    })
  })

  context('Quando click no botão a Lista', function () {

    it.only('Então o produto deve ir para a Lista de Compras', function () {

      const user = this.successful.user
      const product = this.tech.laptop
      const admin = this.successful.admin

      cy.deleteProductByName(admin, product.nome)
      cy.postProduct(admin,product)

      Home.go(user)
      Home.addProductToList(product)


    })

  })
})




