import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: 0,
            username: "",
            password: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <header>
                <h1>Sign Up Page</h1>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name... duh"
                        value={this.state.name}
                        onChange={this.updateForm}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Better be over 21"
                        value={this.state.age}
                        onChange={this.updateForm}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.updateForm}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.updateForm}
                    />
                    <input type="submit" value="Create Profile" />
                </form>
            </header>
        )
    }
    
}

export default SignUp;