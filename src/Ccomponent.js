import React, { Component } from 'react'

export default class Ccomponent extends Component {
    render() {
        return (
            <div>
                <h1>Class component rcc {this.props.surname}</h1>
            </div>
        )
    }
}

Ccomponent.defaultProps = { surname: "xd"}