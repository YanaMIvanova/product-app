import React, { PureComponent } from 'react'
import {ProductContainer} from '../components/ProductContainer'
import {Total} from '../components/Total'
import {AddProductForm} from '../components/AddProductForm'

export class ProductsListContainer extends PureComponent {
    state = {
        totalCash: 0,
        currentID: 0,
        products: []
    }

    addProduct = (name, price) => {
        const newID = this.state.currentID++;

        let product = {
            name: name.value,
            price: Number(price.value),
            id: newID
        }

        name.value = "";
        price.value = "";

        this.setState({
            products: this.state.products.concat(product),
            currentID: newID
        })

        console.log(this.state)
        console.log(product)
    }

    calculate_addToTotalCash = (price) => {
        this.setState({
            totalCash: this.state.totalCash + price
        })
    }

    calculate_removeFromTotalCash = (price) => {
        if(this.state.totalCash - price >= 0) {
            this.setState({
                totalCash: this.state.totalCash - price
            })
        }
    }

    render() {
        const products = this.state.products.map((product) => {
            return (
                <ProductContainer name={product.name} price={product.price}
                                  addToTotalCash={this.calculate_addToTotalCash}
                                  removeFromTotalCash={this.calculate_removeFromTotalCash}
                                  totalCash={this.state.totalCash} />
            )
        })

        return (
            <div>
                <AddProductForm handleAddProduct={this.addProduct}/>
                {products}
                <Total total={this.state.totalCash}/>
            </div>
        )
    }
}
