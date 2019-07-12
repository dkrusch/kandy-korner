import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        {candy.name} of type {' '}
                        {
                            this.props.type
                            .find(type => type.id)
                            .name
                        }
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList