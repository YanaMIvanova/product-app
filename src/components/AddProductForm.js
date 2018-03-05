import React, { PureComponent } from 'react'
import { func } from 'prop-types'

export class AddProductForm extends PureComponent {
    static propTypes = {
        handleAddProduct: func.isRequired
    }

    createProduct = (e) => {
        e.preventDefault();

        const { handleAddProduct } = this.props
        const { name, price } = this.refs

        console.log(name.value === null)

        handleAddProduct(name, price);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.createProduct}>
                    <label>Product Name</label> &nbsp;
                    <input type="text" ref="name" required/>
                    <br/>
                    <label>Product Price</label> &nbsp;
                    <input type="text" ref="price" required/>
                    <br/>
                    <br/>
                    <button>Create Product</button>
                </form>
                <br/>
                <hr/>
                <br/>
            </div>
        );
    }
}
