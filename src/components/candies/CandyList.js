import React, { Component } from 'react'


class CandyList extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        {candy.name}
                        <h5>Type:
                        {
                            this.props.type
                            .find(type => type.id === candy.typeid)
                            .name
                        }
                        </h5>
                        <button onClick={() => this.props.deleteCandy(candy.id)} className="card-link">Discontinue</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList