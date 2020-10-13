import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "lexus",
            surname: "is200t",
            visibility: true,
            count: 0
        }
        this.changeName = this.changeName.bind(this)
        this.hide = this.hide.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    changeName() {
        this.setState({
            name: "toyota"
        })
    }

    hide() {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    increment() {
        this.setState(state => ({
            count: state.count++
        }))
    }

    decrement() {
        this.setState(state => ({
            count: state.count--
        }))
    }

    reset() {
        this.setState({
            count: 0
        })
    }


    render() {
        const name = this.state.name
        const count = this.state.count
        if (this.state.visibility) {
            return (
                <div>
                    <h1>Class component rcc {name}</h1>
                    <p>Count: {count}</p>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.reset}>reset</button>
                    <button onClick={this.changeName}>change name</button>
                    <button onClick={this.hide}>hide</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.hide}>show</button>
                </div>
            )
        }
    }
}

// Classcomponent.defaultProps = { surname: "xd"}