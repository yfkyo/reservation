const Product = require('./model/product')

class FakeDB{
    constructor(){
        this.products = [
            {
              name:'Phone XL',
              price:799,
              description:'A large phone with one of the best screens'
            },
            {
              name:'Phone Mini',
              price:699,
              description:'A great phone with one of the best cameras'},
            {
              name:'Phone Standard',
              price:299,
              description:'123'} ,
             {
              name:'Phone Standard222',
              price:29922,
              description:'12311'} 
          ]
    }

    async initDB(){
        await this.cleanDB()
        this.pushProductsToDB()
    }

    async cleanDB(){
        await Product.deleteMany({})
    }

    pushProductsToDB(){
        this.products.forEach(
            (product) =>{
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
    seeDB(){
        this.pushProductsToDB()
    }
}

module.exports = FakeDB