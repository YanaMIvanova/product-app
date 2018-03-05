import React, { PureComponent } from 'react'
import { number } from 'prop-types'

export class Total extends PureComponent {
    static propTypes = {
        total: number
    }

    render() {
        const { total } = this.props

        return (
            <div>
                <h3>Total cash: {total} $</h3>
            </div>
        );
    }
}
