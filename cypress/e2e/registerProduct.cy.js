import { ProductRegister } from "../support/actions/Admin/productRegister"
import { ProductList } from "../support/actions/Admin/productList"
import { Notification } from "../support/actions/components/notification"


describe('Dado que estou na página de Cadastro de Produtos', function () {

    beforeEach(function () {
        cy.fixture('signup/successful').then(function (successful) {
            this.successful = successful
        })

        cy.fixture('products/tech').then(function (tech) {
            this.product = tech
        })


    })

    context('Quando eu preencho dados de corretamente', function () {

        it('Então de deve ser possível cadastrar um produto com sucesso', function () {

            const admin = this.successful.admin
            const product = this.product.monitor

            cy.adjustUserData(admin)
            cy.deleteProductByName(admin, product.nome)

            ProductRegister.go(admin)
            ProductRegister.fillform(product)
            ProductRegister.submit()

            ProductList.findProductByName(product.nome)
            
            

        })

        it('Então não deve ser possível cadastrar um produto já existente', function () {

            const admin = this.successful.admin
            const product = this.product.mouse
            cy.adjustUserData(admin)
            cy.deleteProductByName(admin, product.nome)
            cy.postProduct(admin, product)

            ProductRegister.go(admin)
            ProductRegister.fillform(product)
            ProductRegister.submit()

            Notification.errorMsgShouldBe('Já existe produto com esse nome')

        })

        it('Então de deve ser possível cadastrar um produto com imagem', function () {

            const admin = this.successful.admin
            const product = this.product.ssd

            cy.adjustUserData(admin)
            cy.deleteProductByName(admin, product.nome)

            ProductRegister.go(admin)
            ProductRegister.fillform(product)
            ProductRegister.submit()

            ProductList.findProductByName(product.nome, product.image)
            
            

        })

    })

    context('Quando eu preencho os dados incorretamente', function () {

        const requiredFields = [
            { nome: '', preco: '99', descricao: 'teste', quantidade: '50', output: 'Nome é obrigatório' },
            { nome: 'Produto sem preço', preco: '', descricao: 'teste', quantidade: '50', output: 'Preco é obrigatório' },
            { nome: 'Produto sem descrição', preco: '99', descricao: '', quantidade: '50', output: 'Descricao é obrigatório' },
            { nome: 'Produto sem quantidade', preco: '99', descricao: 'teste', quantidade: '', output: 'Quantidade é obrigatório' },

        ]

        requiredFields.forEach(function (required) {

            it(`Então o sistema deve retornar "${required.output}"`, function () {

                const admin = this.successful.admin

                cy.adjustUserData(admin)


                ProductRegister.go(admin)
                ProductRegister.fillform(required)
                ProductRegister.submit()
                Notification.errorMsgShouldBe(required.output)

            })
        })

        it('Então deve retornar mensagem após esvaziar campos', function () {

            const admin = this.successful.admin
            const product = this.product.monitor

            cy.adjustUserData(admin)

            ProductRegister.go(admin)
            ProductRegister.fillform(product)
            ProductRegister.clearform()
            ProductRegister.submit()
            Notification.errorMsgShouldBe('Nome não pode ficar em branco')
            Notification.errorMsgShouldBe('Preco deve ser um número')
            Notification.errorMsgShouldBe('Descricao não pode ficar em branco')
            Notification.errorMsgShouldBe('Quantidade deve ser um número')


        })


    })

})