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

    

    render() {
        return (
            <header>
                <h1>Sign Up Page</h1>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name... duh"
                        value={this.state.name}
                        onChange={this.updateForm}
                    />
                    <input
                        type="text"
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
                    <imput type="submit" value="Create Profile" />
                </form>
            </header>
        )
    }
    
}

export default SignUp;