import { Home } from "../support/actions/Home"
import { ProductList } from "../support/actions/productList"
import { ProductDetails } from "../support/actions/productDetails"
import { Header } from "../support/actions/components/header"

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

    it('Então o produto deve ir para a Lista de Compras', function () {

      const user = this.successful.user
      const product = this.tech.laptop
      const admin = this.successful.admin

      cy.adjustUserData(admin)
      cy.adjustUserData(user)

      cy.deleteProductByName(admin, product.nome)
      cy.postProduct(admin, product)

      Home.go(user)
      Home.addProductToList(product)
      ProductList.shouldHaveProduct(product)


    })

  })

  context('Quando click no botão Detalhes', function () {

    it('Então o devo ser redirecionado para página Detalhes do Produto', function () {

      const user = this.successful.user
      const product = this.tech.monitor
      const admin = this.successful.admin

      cy.adjustUserData(admin)
      cy.adjustUserData(user)
      cy.deleteProductByName(admin, product.nome)
      cy.postProduct(admin, product)

      Home.go(user)
      Home.goToProductDetails(product)
      ProductDetails.verifyDetails(product)


    })

  })

  context('Quando click no botão de Carrinho', function () {

    it('Então o devo ser redirecionado para página de Lista de Compras', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Home.clickOnCart()
      ProductList.shouldBeVisible()

    })

  })

  context('Quando pesquiso pelo produto', function () {

    it('Então o sistema deve me retornar o filtro corretamente', function () {

      const user = this.successful.user
      const product = this.tech.teclado
      const admin = this.successful.admin

      cy.adjustUserData(admin)
      cy.adjustUserData(user)

      cy.deleteProductByName(admin, product.nome)
      cy.postProduct(admin, product)

      Home.go(user)
      Home.searchProduct(product.nome)
      Home.shouldHaveProduct(product)

    })

    it('Então o sistema não deve me retornar nenhum produto', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Home.searchProduct('Produto Ruim')
      Home.notFoundShouldHaveTxt('Nenhum produto foi encontrado')
    })

  })

  context('Quando click nos botões do header', function () {

    it('Então o devo ser redirecionado para a página de Lista de Compras', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Header.goToProductList

    })

    it('Então o devo ser redirecionado para a página de carrinho', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Header.goToCart() 
    
    })

    it('Então o devo ser redirecionado para a página de carrinho', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Header.goToHome()
    
    })

    it('Então o devo ser possível fazer Logout', function () {

      const user = this.successful.user

      cy.adjustUserData(user)

      Home.go(user)
      Header.logout()
      
    
    })

  })

})




