import React, { PureComponent } from 'react'
import { string, number, func } from 'prop-types'

export class Product extends PureComponent {
    static propTypes = {
        name: string,
        price: number,
        handleShow: func,
        addToTotalCash: func,
        removeFromTotalCash: func,
        totalCash: number
    }

    state = {
        qty: 0
    }

    chechIfCanAfford = () => {
        const { price, totalCash } = this.props

        return totalCash + price > 1000
    }

    chechIfIsBought = () => {
        const { qty } = this.state

        return qty === 0
    }

    buy = () => {
        const { addToTotalCash, price } = this.props

        this.setState({
            qty: this.state.qty + 1
        })

        addToTotalCash(price)
    }

    show = () => {
        const { handleShow, name } = this.props

        handleShow(name)
    }

    returnProduct = () => {
        const { removeFromTotalCash, price } = this.props
        const { qty: currentQty, qty } = this.state

        if(qty > 0) {
            removeFromTotalCash(price)

            this.setState({
                qty: currentQty - 1
            })
        }
    }

    render() {
        const { name, price } = this.props
        const { qty } = this.state

        return (
            <div>
                <p>{name} - ${price}</p>
                <button onClick={this.buy} disabled={this.chechIfCanAfford()} >
                    Buy
                </button>
                <button onClick={this.show}>
                    Show
                </button>
                <button onClick={this.returnProduct} disabled={this.chechIfIsBought()} >
                    Return
                </button>
                <h3>Qty: {qty} item(s)</h3>
                <br />
                <hr/>
                <br />
            </div>
        )
    }
}
